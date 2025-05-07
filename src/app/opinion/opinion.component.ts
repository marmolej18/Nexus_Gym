import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opinion',
  imports: [],
  templateUrl: './opinion.component.html',
  styleUrl: './opinion.component.css'
})
export class OpinionComponent {
  @Input() opinion: { nombre: string, opinion: string , apellido: string, edad:number, fecha: string}= { nombre: '', opinion: '', apellido: '', fecha: '', edad: 0 };

  fechaActual: string;

  constructor() {
    const fecha = new Date();
    this.fechaActual = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
  }

  get fechaFormateada(): string {
    const fecha = new Date(this.opinion.fecha);
    return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
  }
}
