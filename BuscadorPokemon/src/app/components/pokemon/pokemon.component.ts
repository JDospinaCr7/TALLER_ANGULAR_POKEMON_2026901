import { Component } from '@angular/core';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuscadorPokemon';
}