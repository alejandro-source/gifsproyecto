import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomeComponent } from './pages/home/home.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    CardListComponent,
    SearchBoxComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class GifsModule { }
