import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
