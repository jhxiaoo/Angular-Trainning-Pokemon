import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonResponse } from 'src/app/interface/pokemon.interface';
import { PokemonService } from 'src/app/service/pokemon.service';
import { PokemonselectComponent } from '../pokemonselect/pokemonselect.component';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss'],
})
export class PokemonlistComponent implements OnInit {
  starterPokemon = ['bulbasaur', 'squirtle', 'charmander'];
  pokemoninfos: PokemonResponse[] = [];
  pokemonshow!: PokemonResponse[];
  showButton:boolean = false;

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    for (let name of this.starterPokemon) {
      this.pokemonService
        .getPokemon(name)
        .subscribe((data: PokemonResponse) => {
          this.pokemoninfos.push(data);
          // console.log(this.pokemoninfos);
        });
    }
    this.pokemonshow = this.pokemoninfos;
    // console.log(this.pokemonshow);
  }

  onClick(pokemoninfo: PokemonResponse) {
    const dialogRef = this.dialog.open(PokemonselectComponent, {
      width: '300px',
      height: '300px',
      data: {
        pokemoninfo: pokemoninfo,
        selected: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.showButton = true;
        this.pokemonshow = this.pokemoninfos.filter(
          (data) => data === pokemoninfo
        );
      }
      console.log(result);
    });
  }

  onClickAll() {
    this.showButton = false;
    this.pokemonshow = this.pokemoninfos;
  }
}
