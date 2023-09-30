import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListPageComponent } from './pokemon/pages/pokemon-list-page/pokemon-list-page.component';
import { PokemonSearchPageComponent } from './pokemon/pages/pokemon-search-page/pokemon-search-page.component';
import { PokemonDetailPageComponent } from './pokemon/pages/pokemon-detail-page/pokemon-detail-page.component';

const routes: Routes = [
  {
    path: 'pokemon-list',
    component: PokemonListPageComponent
  },
  {
    path: 'pokemon-search',
    component: PokemonSearchPageComponent
  },
  {
    path: 'pokemon-by-name/:name',
    component: PokemonDetailPageComponent
  },
  {
    path: '',
    redirectTo: 'pokemon-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pokemon-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
