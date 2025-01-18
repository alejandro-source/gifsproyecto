import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }

  clearHistory() {
    this.gifsService.clearHistory(); // Llama al servicio para limpiar el historial
  }
}
