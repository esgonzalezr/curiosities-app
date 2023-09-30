import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    ChipModule,
    PaginatorModule
  ]
})
export class PrimengModule { }
