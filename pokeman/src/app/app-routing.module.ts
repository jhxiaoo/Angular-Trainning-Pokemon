import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonlistComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
