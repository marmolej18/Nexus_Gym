import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  @Output() buscar = new EventEmitter<string>();
  termino: string = '';

  onBuscar(){
    this.buscar.emit(this.termino.trim().toLowerCase());
  }
}
