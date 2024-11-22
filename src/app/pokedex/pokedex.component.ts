import { Component } from '@angular/core';
import {
  PokeDetails,
  PokeInfos,
  PokemonResult,
  PokeTypeList,
} from '../../shared/models/pokemon.models';
import {PokemonService} from './services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  pokemonResult!: PokemonResult;
  pokemonToDisplay!: PokeDetails;
  pokeTypeList!: PokeTypeList;
  // pokeInfo!: PokeInfos;

  constructor(
    private _pokeService: PokemonService
  ) {
    this.getCards('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  }

  getCards(url: string): void {
    this._pokeService.getPokemon(url).subscribe({
      next: (result: PokemonResult) => {
        this.pokemonResult = result;
        this.pokemonResult.results.forEach((pokemonInfo: PokeInfos) => {
          this.setInfosPoke(pokemonInfo.url, pokemonInfo);
        })
        console.log(this.pokemonResult)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  setInfosPoke(url: string, pokemon: PokeInfos): void {
    this._pokeService.getOnePokemon(url).subscribe({
      next: (pokeDetails: PokeDetails) => {
        pokemon.pokeImg = pokeDetails.sprites.other.dream_world.front_default;
        pokemon.pokeID = pokeDetails.id;
        pokemon.pokeName = pokeDetails.name;
      },
      error: (error: Error) => {
        console.log(error);
        return null;
      }
    });
  }

  getOne(url: string): void {
    this._pokeService.getOnePokemon(url).subscribe({
      next: (result: PokeDetails) => {
        this.pokemonToDisplay = result;
        console.log(result)
      }
    });
  }

  previous() {
    if (this.pokemonResult.previous) {
      this.getCards(this.pokemonResult.previous)
    }
  }

  next() {
    if(this.pokemonResult.next) {
      this.getCards(this.pokemonResult.next)
    }
  }
}
