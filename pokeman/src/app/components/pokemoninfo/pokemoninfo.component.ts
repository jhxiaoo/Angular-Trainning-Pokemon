import { Component, Input, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/interface/pokemon.interface';

@Component({
  selector: 'app-pokemoninfo',
  templateUrl: './pokemoninfo.component.html',
  styleUrls: ['./pokemoninfo.component.scss']
})
export class PokemoninfoComponent implements OnInit {
  @Input() pokemoninfo!: PokemonResponse;

  constructor() { }

  ngOnInit() {
  }

}
