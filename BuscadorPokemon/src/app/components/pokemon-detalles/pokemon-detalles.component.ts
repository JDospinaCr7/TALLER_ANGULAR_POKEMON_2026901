import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonStorage } from '../../services/pokemon-storage';

@Component({
  selector: 'app-pokemon-detalles',
  imports: [RouterLink],
  standalone: true,
  styleUrls: ['./pokemon-detalles.component.css'],
  templateUrl: './pokemon-detalles.component.html',
})
export class PokemonDetallesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pokeService = inject(PokemonStorage);

  pokemonData: any = null;
  cargando: boolean = true;

  ngOnInit(): void {
    const pokeName = this.route.snapshot.params['name'];
    this.pokeService.consultarPokemon(pokeName).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('No llegó ningún dato.', err);
        this.cargando = false;
      }
    });
  }
}