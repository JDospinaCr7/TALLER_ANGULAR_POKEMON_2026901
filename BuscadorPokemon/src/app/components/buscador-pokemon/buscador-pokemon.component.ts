import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { PokemonListaComponent } from '../pokemon-lista/pokemon-lista.component';
import { ResaltarPokemonDirective } from '../../directives/resaltar-pokemon';

@Component({
  selector: 'app-buscador-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PokemonListaComponent,
    ResaltarPokemonDirective
  ],
  templateUrl: './buscador-pokemon.component.html',
  styleUrls: ['./buscador-pokemon.component.css']
})
export class BuscadorPokemonComponent {
  pokemon: string = '';
  pokemonData: any = null;
  tiposPokemon: string = '';
  habilidadesPokemon: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  // Variable que guarda el Pokémon seleccionado para la vista exclusiva
  pokemonSeleccionado: any = null;

  constructor(private http: HttpClient) {}

  buscarPokemon() {
    if (!this.pokemon) return;
    this.isLoading = true;
    this.errorMessage = '';
    this.pokemonData = null;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon.toLowerCase()}`).subscribe({
      next: (data: any) => {
        this.pokemonData = data;
        this.tiposPokemon = data.types.map((t: any) => t.type.name).join(', ');
        this.habilidadesPokemon = data.abilities.map((a: any) => a.ability.name).join(', ');
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No se encontró el Pokémon. Intenta de nuevo.';
        this.isLoading = false;
      }
    });
  }

  // Captura los datos del componente hijo, activa la vista exclusiva y oculta el header
  verDetalleExclusivo(detalles: any) {
    this.pokemonSeleccionado = detalles;
    document.dispatchEvent(new CustomEvent('cambiarModoDetalle', { detail: true }));
  }

  // Regresa a la lista general del buscador y vuelve a mostrar el header
  volverALista() {
    this.pokemonSeleccionado = null;
    document.dispatchEvent(new CustomEvent('cambiarModoDetalle', { detail: false }));
  }
}