import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map, of, tap } from 'rxjs';
import { PokemonMenuList, PokemonSingle, Result } from '../interfaces/pokemon-list.interface';
import { PokemonDetail } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: String = 'https://pokeapi.co/api/v2/pokemon';


  constructor(private http: HttpClient) { }

  getPokemonList(offset = 0, limit = 20): Observable<PokemonSingle[]> {
    return this.http.get<PokemonMenuList>(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        map(res => this.transformIntoPokemonsArray(res.results))
      );
  }

  getPokemonByNameOrId(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.baseUrl}/${name}`)
      .pipe(
        catchError(err => of()),
        tap(response => console.log("Response desde el tap: ", response))
      );
  }

  private transformIntoPokemonsArray(list: Result[]): PokemonSingle[] {

    const pokemonList = list.map(pokemon => {

      const id = pokemon.url.split('/')[6];
      const name = pokemon.name;
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

      return {
        id: id,
        name: name,
        imgUrl: imgUrl
      };

    }).filter(pokemon => parseInt(pokemon.id) <= 649);

    return pokemonList;
  }


}