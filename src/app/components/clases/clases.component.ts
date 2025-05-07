import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Clases } from '../../clases';
import { PromocionComponent } from '../promocion/promocion.component';

@Component({
  selector: 'app-clases',
  imports: [CommonModule, PromocionComponent],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {
  clases: Clases[] = [
    {
      nombre: 'Zumba',
      descripcion: 'Una clase de baile aeróbico que combina música latina y ejercicios cardiovasculares.',
      horario: 'Lunes y Miércoles 18:00 - 19:00',
      costo: '$100',
      imagen: 'assets/img/zumba.jpg' 
    },
    {
      nombre: 'Spinning',
      descripcion: 'Clases en bicicletas estáticas que simulan recorridos en exteriores con intervalos de alta y baja intensidad.',
      horario: 'Martes y Jueves 9:00 - 10:00',
      costo: '$400',
      imagen: 'assets/img/spinning.jpg' 
    },
    {
      nombre: 'Pilates',
      descripcion: 'Ejercicios de bajo impacto que se enfocan en la fuerza del core (zona central de cuerpo), la flexibilidad y la postura.',
      horario: 'Lunes, Miercoles y Viernes 12:00 - 13:00',
      costo: '$1500',
      imagen: 'assets/img/pilates.jpg' 
    },
    {
      nombre: 'Yoga',
      descripcion: 'Clases que combinan ejercicios físicos, respiración y meditación para mejorar la flexibilidad, la fuerza y la relajación.',
      horario: 'Lunes a Viernes 17:00 - 18:00',
      costo: '$500',
      imagen: 'assets/img/yoga.jpg' 
    },
    {
      nombre: 'Body Pump',
      descripcion: 'Una clase de entrenamiento con pesas que se centra en la tonificación muscular mediante movimientos de alta repetición.',
      horario: 'Miercoles y Viernes 19:00 - 20:00',
      costo: '$400',
      imagen: 'assets/img/bodypump.jpg' 
    },
    {
      nombre: 'Cross Fit',
      descripcion: 'Un programa de entrenamiento funcional que combina levantamiento de pesas, ejercicios cardiovasculares y movimientos de agilidad.',
      horario: 'Lunes a viernes 7:00 - 8:00',
      costo: '$1000',
      imagen: 'assets/img/crossfit.jpg' 
    },
    {
      nombre: 'Boxeo',
      descripcion: 'Clases de entrenamiento basadas en el boxeo, que incluyen técnicas de golpeo y trabajo de resistencia.',
      horario: 'Lunes a viernes 17:00 - 19:00',
      costo: '$1200',
      imagen: 'assets/img/boxeo.jpg' 
    },
    {
      nombre: 'Kick boxing',
      descripcion: 'Combina técnicas de patadas y golpes de boxeo en una clase que también mejora la resistencia y la tonificación muscular.',
      horario: 'Martes y jueves 17:00 - 18:00',
      costo: '$999',
      imagen: 'assets/img/kickboxing.jpg' 
    },
    
    
    
    
  ];
}
