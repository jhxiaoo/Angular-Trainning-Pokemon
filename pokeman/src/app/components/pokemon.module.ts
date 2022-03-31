import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonselectComponent } from './pokemonselect/pokemonselect.component';
import { PokemoninfoComponent } from './pokemoninfo/pokemoninfo.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    PokemonselectComponent,
    PokemoninfoComponent,
    PokemonlistComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule
  ]
})
export class PokemonModule { }
