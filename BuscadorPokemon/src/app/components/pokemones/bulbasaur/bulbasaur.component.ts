import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bulbasaur',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './bulbasaur.component.html',
  styleUrls: ['./bulbasaur.component.css']
})
export class BulbasaurComponent {
  nombrePokemon: string = 'bulbasaur';
  pokemonData: any = null;
  tiposPokemon: string = '';
  isLoading: boolean = false;

  // Evento que le avisa al buscador principal que se hizo clic
  @Output() clickEnPokemon = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  cargarDatos() {
    this.isLoading = true;
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.nombrePokemon}`).subscribe({
      next: (data: any) => {
        this.pokemonData = data;
        this.tiposPokemon = data.types.map((t: any) => t.type.name).join(', ');
        this.isLoading = false;

        // Emitimos la información completa hacia la vista exclusiva
        this.clickEnPokemon.emit({
          nombre: data.name,
          sprite: data.sprites.front_default,
          tipo: this.tiposPokemon,
          altura: data.height / 10,
          peso: data.weight / 10
        });
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}