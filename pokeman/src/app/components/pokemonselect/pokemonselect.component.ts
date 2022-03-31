import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonResponse } from 'src/app/interface/pokemon.interface';

@Component({
  selector: 'app-pokemonselect',
  templateUrl: './pokemonselect.component.html',
  styleUrls: ['./pokemonselect.component.scss']
})
export class PokemonselectComponent implements OnInit {
  pokemoninfo!: PokemonResponse;

  constructor(
    public dialogRef: MatDialogRef<PokemonselectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {pokemoninfo: PokemonResponse, selected: boolean}
  ) { }

  ngOnInit(): void {
    this.pokemoninfo = this.data.pokemoninfo;
  }

  onClickNoThanks(){
    this.dialogRef.close();
  }

}
