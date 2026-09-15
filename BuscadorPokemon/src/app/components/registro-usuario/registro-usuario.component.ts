import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  nombre: string = '';
  apellido: string = '';
  tipoDocumento: string = '';
  dni: string = '';
  fechaNacimiento: string = '';
  telefono: string = '';
  email: string = '';
  pais: string = '169';
  ciudad: string = '';
  aceptaTratamiento: boolean = false;

  registrarUsuario() {
    console.log('Datos registrados:', {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      pais: this.pais,
      ciudad: this.ciudad
    });
    alert('¡Usuario registrado con éxito bajo los estándares DIAN!');
  }
}