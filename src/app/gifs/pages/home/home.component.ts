import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( private gifsService: GifsService){
  }
    //creamos un getter
    get gifs(): Gif[] {

      return this.gifsService.gifList;
    }

}
