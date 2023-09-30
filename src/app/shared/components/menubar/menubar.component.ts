import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menubar',
  templateUrl: './menubar.component.html',
  styles: [
  ]
})
export class MenubarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pokemon',
        icon: 'pi pi-star-fill',
        items: [
          {
            label: 'Listado general',
            icon: 'pi pi-list',
            routerLink: 'pokemon-list'
          },
          {
            label: 'Buscar por nombre',
            icon: 'pi pi-search',
            routerLink: 'pokemon-search'
          }
        ]
      }
    ];
  }
}
