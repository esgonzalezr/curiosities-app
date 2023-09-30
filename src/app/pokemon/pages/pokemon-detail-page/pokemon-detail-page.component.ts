import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { switchMap } from 'rxjs';
import { PokemonDetail } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.css']
})
export class PokemonDetailPageComponent implements OnInit {

  pokemon!: PokemonDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ name }) => this.pokemonService.getPokemonByNameOrId(name))
      )
      .subscribe(pokemon => this.pokemon = pokemon);
  }
}
