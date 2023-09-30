import { NgModule } from '@angular/core';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { PokemonSearchPageComponent } from './pages/pokemon-search-page/pokemon-search-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrimengModule } from '../primeng/primeng.module';
import { PokemonDetailPageComponent } from './pages/pokemon-detail-page/pokemon-detail-page.component';



@NgModule({
  declarations: [
    PokemonListPageComponent,
    PokemonSearchPageComponent,
    PokemonDetailPageComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule
  ]
})
export class PokemonModule { }
