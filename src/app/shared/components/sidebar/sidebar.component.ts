import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public currentTag: string = ''; // Agregar esta propiedad

  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.currentTag = tag; // Marca el tag seleccionado
    this.gifsService.searchTag(tag);
  }

  clearHistory() {
    this.gifsService.clearHistory();
    this.currentTag = ''; // Limpia el tag activo
  }
}
