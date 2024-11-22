import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokeDetails, PokemonResult, PokeTypeList} from '../../../shared/models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private _http: HttpClient
  ) { }

  getPokemon(url: string): Observable<PokemonResult> {
    return this._http.get<PokemonResult>(url);
  }

  getOnePokemon(url: string): Observable<PokeDetails> {
    return this._http.get<PokeDetails>(url);
  }
}
