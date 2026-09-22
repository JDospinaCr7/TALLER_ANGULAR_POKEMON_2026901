import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-greninja',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './greninja.component.html',
  styleUrls: ['./greninja.component.css']
})
export class GreninjaComponent {
  nombrePokemon: string = 'greninja';
  pokemonData: any = null;
  tiposPokemon: string = '';
  isLoading: boolean = false;

  @Output() clickEnPokemon = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  cargarDatos() {
    this.isLoading = true;
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.nombrePokemon}`).subscribe({
      next: (data: any) => {
        this.pokemonData = data;
        this.tiposPokemon = data.types.map((t: any) => t.type.name).join(', ');
        this.isLoading = false;

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