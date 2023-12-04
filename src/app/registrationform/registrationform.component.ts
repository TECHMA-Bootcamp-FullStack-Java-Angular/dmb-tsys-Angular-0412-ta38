import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataClientService } from '../data-client.service';

@Component({
  selector: 'app-registrationform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css'
})

export class RegistrationformComponent {

    cliente = {
    nombre: '',
    cif: '',
    direccion: '',
    grupo: 'Sin definir'
  };

  constructor(private dataService: DataClientService) { }

  guardarCliente() {
    this.dataService.enviarDatos(this.cliente);
  }
}
