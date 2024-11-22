import {Component, Input} from '@angular/core';
import {PokedexComponent} from '../pokedex/pokedex.component';
import {PokeDetails} from '../../shared/models/pokemon.models';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input({required: false})
  pokemonToDisplay?: PokeDetails;
}
