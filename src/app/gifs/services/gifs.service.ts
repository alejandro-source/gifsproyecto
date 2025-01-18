// Indica que la clase puede ser utilizada como un servicio 
import { Injectable } from '@angular/core';
// HttpClient: Lo necestio para que pueda realizar peticiones HTTP para interactuar con APIS
// HttpParams: Se utiliza para construir parametros de consultas
import { HttpClient, HttpParams } from '@angular/common/http';
// Importamos las interfaces que definen la estructura de los datos que recibiremos de la API
import { SearchResponse, Gif} from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})

export class GifsService {
  clearHistory() {
    this._tagsHistory = []; // Limpia el historial
    this.saveLocalStorage();
  }
  // Array para almacenar la lista de Gifs obtenida de la API
  public gifList: Gif[] = []

  // Array para mantener el historial de busquedas
  private _tagsHistory: string[] = [];

  private apiKey: string = 'UyYFWHNh3fh5JS5j3KcJX8i64KQoLr97';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  
  // Inyectamos el servicio HttpCliente para poder realizar peticiones HTTP
  constructor(private http:HttpClient) { }

  // Devuelve una copia del historial de busquedas 
  get tagsHistory(){

    // Sirve para devolver una copia del array "_tagsHistory" en lugar de devolver el array original directamente 
    // Esto sirve para proteger el array original de modificaciones externas
    return [...this._tagsHistory];
  }
  
  // Metodo para organizar el historial de busquedas
  private organizerHistory(tag: string){
    // Cinvertimos el tag a minsuculas para que las busqueas sean mas efectivas
    tag = tag.toLowerCase();
    // Si ese tag ya existe en ese historial pues lo eliminamos
    if(this.tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }
    // Añadimos el nuevo tal gal inicio del historial
    this._tagsHistory.unshift( tag );
    // Limitiamos el historial a 10 elementos
    this._tagsHistory = this.tagsHistory.splice(0,10);
    // Guardamos el hisotiral actualizado en el Local Sotrage del navegador
    this.saveLocalStorage();
  }

  // Metodo para guardar el hisotiral en el Local Storage
  saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagsHistory))
  }

  // Metodo publico para buscar un tag
  public searchTag( tag: string):void {
    // Si el tag esta vacio no hariamos nada
    if ( tag.length === 0) return;
    
    // Organizamos el historial de las busquedas
    this.organizerHistory(tag);
    
    // Configuramos los parametros necesarios para la peticion HTTP
    const params = new HttpParams()
      // Inlcuimos la clave API
      .set('api_key', this.apiKey )
      // Establecemos el limite de busqueda, en este caso 10
      .set('limit', '10')
      // Inlcuimos el tag el cual queremos buscar
      .set('q', tag)
    
      // Realizamos la peticion "Get" a la API
    this.http.get<SearchResponse>(`${ this.serviceUrl}/search`, { params })
      .subscribe( resp => {
        // Guardamos los datos obtenidos de la API en gifList
        this.gifList = resp.data;
        // Imprimimos los gifs en la consola para ver que este todo bien
        console.log({gifs: this.gifList});
      })  
    }
    
}
