import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import { PokemonListaComponent } from './components/pokemon-lista/pokemon-lista.component';
import { PokemonDetallesComponent } from './components/pokemon-detalles/pokemon-detalles.component';
import { BulbasaurComponent } from './components/pokemones/bulbasaur/bulbasaur.component';
import { GreninjaComponent } from './components/pokemones/greninja/greninja.component';
import { LucarioComponent } from './components/pokemones/lucario/lucario.component';
import { LugiaComponent } from './components/pokemones/lugia/lugia.component';
import { MewtwoComponent } from './components/pokemones/mewtwo/mewtwo.component';
import { RayquazaComponent } from './components/pokemones/rayquaza/rayquaza.component';

export const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'buscador', component: BuscadorPokemonComponent },
  { path: 'pokemon-lista', component: PokemonListaComponent },
  { path: 'pokemon/:name', component: PokemonDetallesComponent },
  { path: 'bulbasaur', component: BulbasaurComponent },
  { path: 'greninja', component: GreninjaComponent },
  { path: 'lucario', component: LucarioComponent },
  { path: 'lugia', component: LugiaComponent },
  { path: 'mewtwo', component: MewtwoComponent },
  { path: 'rayquaza', component: RayquazaComponent },
  { path: '**', redirectTo: 'registro' }
];