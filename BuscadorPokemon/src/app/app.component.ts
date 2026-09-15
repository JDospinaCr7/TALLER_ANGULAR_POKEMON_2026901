import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Bienvenido al buscador de Pokemon con mas Aura de la 3227025 ;D';
  modoDetalleActivo: boolean = false;

  // Escuchamos eventos globales personalizados desde los hijos para ocultar el header
  @HostListener('document:cambiarModoDetalle', ['$event'])
  onCambiarModoDetalle(event: CustomEvent) {
    this.modoDetalleActivo = event.detail;
  }
}