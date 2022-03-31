import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../interface/pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private Base_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http:HttpClient) { }

  getPokemon(name: string) {
    return this.http.get([this.Base_URL, name].join('/')) as Observable<PokemonResponse>;
  }
}
