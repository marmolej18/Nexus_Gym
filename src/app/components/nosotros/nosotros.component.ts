import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import { DateAdapter, MAT_DATE_FORMATS, MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpinionComponent } from '../../opinion/opinion.component';
import Swal from 'sweetalert2';
import { MatSelectModule } from '@angular/material/select';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { TituloNosotrosComponent } from '../titulo-nosotros/titulo-nosotros.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-nosotros',
  standalone: true,
  providers: [provideNativeDateAdapter(), { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
  imports: [FormsModule, MatCardModule, MatInputModule,MatFormFieldModule,MatButtonModule,  MatDatepickerModule, OpinionComponent, MatOptionModule, MatSelectModule, TituloNosotrosComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  nombre: string = '';
  opinion: string = '';
  apellido: string = '';
  fecha: string = '';
  opiniones: any[] = [];
  hoy: Date = new Date();
  edad: number | undefined;
  edades: number[] = [];


  enviar() {
    const nuevaOpinion = {
      nombre: this.nombre,
      apellido: this.apellido,
      fecha: this.fecha,
      opinion: this.opinion,
      edad: this.edad
    };

    this.opiniones = JSON.parse(localStorage.getItem('opiniones') || '[]');
    this.opiniones.push(nuevaOpinion);
    localStorage.setItem('opiniones', JSON.stringify(this.opiniones));

    /*alert('¡Gracias por tu opinión!');
    this.nombre = '';
    this.opinion = '';*/
    Swal.fire({
      title: '¡Gracias por tu opinión!',
      html: `<p><strong>Nombre:</strong> ${this.nombre}</p>
             <p><strong>Opinión:</strong> ${this.opinion}</p>`,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    });
    
    // Luego limpias los campos
    this.nombre = '';
    this.opinion = '';
    this.apellido = '';
    this.fecha = '';
    this.edad= undefined;
  }

  ngOnInit() {
    this.opiniones = JSON.parse(localStorage.getItem('opiniones') || '[]');
    this.edades = Array.from({ length: 83 }, (_, i) => i + 18); // de 18 a 100

  }
}
  
