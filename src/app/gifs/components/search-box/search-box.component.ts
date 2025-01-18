import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
@Component({
  selector: 'app-search-box',
  standalone: false,
  
  template: `
    <h5>Buscar</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput> <!-- Usamos template reference variable para acceder al input -->
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  //Utilizamos el constructor para inyectar el servicio
  constructor( private gifsService: GifsService) { }



  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag)

    this.tagInput.nativeElement.value= ''; //Esto es para limpiar el input
  }
}
