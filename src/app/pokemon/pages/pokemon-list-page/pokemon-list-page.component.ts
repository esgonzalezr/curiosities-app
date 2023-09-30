import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonSingle, Result } from '../../interfaces/pokemon-list.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html'
})
export class PokemonListPageComponent implements OnInit, OnDestroy {

  pokemonList!: PokemonSingle[];


  //Paginator properties
  first: number = 0;
  rows: number = 20;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList()
      .subscribe(pokemons => {
        this.pokemonList = pokemons;
      });
  }

  ngOnDestroy(): void {

  }


  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;

    this.pokemonService.getPokemonList(event.first, event.rows)
      .subscribe(pokemons => {
        this.pokemonList = pokemons;
      });
    // console.log('Event.first', event.first);
    // console.log('Event rows', event.rows);
  }
}
