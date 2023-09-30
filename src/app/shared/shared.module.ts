import { NgModule } from '@angular/core';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule
  ],
  exports: [
    MenubarComponent
  ]
})
export class SharedModule { }
