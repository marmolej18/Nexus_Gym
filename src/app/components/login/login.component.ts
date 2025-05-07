import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/auth.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import Swal from 'sweetalert2';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import moment from 'moment';


export const MY_DATE_FORMATS = {
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
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' }
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  // Formulario con validadores required
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    edad: [null, Validators.required],
    fecha: [null as Date | null, Validators.required],
    nivel: this.fb.group({
      basico: [false],
      intermedio: [false],
      avanzado: [false]
    }, { validators: this.alMenosUnNivelSeleccionado })
  });

  edades = Array.from({ length: 60 - 18 + 1 }, (_, i) => i + 18); //para el checkbox
  errorMessage: string = '';

  onSubmit() {
    const { username, password, edad, nivel } = this.loginForm.value;

    // Validación: nombre en minúsculas
    if (username !== username?.toLowerCase()) {
      Swal.fire({
        icon: 'warning',
        title: 'Nombre inválido',
        text: 'El nombre de usuario debe contener solo minúsculas.',
        confirmButtonColor: '#eab6ac'
      });
      return;
    }

    // Validación: contraseña con máximo 5 caracteres
    if (password && password.length > 4) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña inválida',
        text: 'La contraseña no debe tener más de 5 caracteres.',
        confirmButtonColor: '#eab6ac'
      });
      return;
    }

    // Validación: fecha no futura ni pasada
    const fechaValor = this.loginForm.get('fecha')?.value;
    if (moment.isMoment(fechaValor)) {
      const hoy = moment().startOf('day');
      const seleccionada = fechaValor.clone().startOf('day');

      if (seleccionada.isAfter(hoy)) {
        Swal.fire({
          icon: 'warning',
          title: 'Fecha inválida',
          text: 'No puedes elegir una fecha futura.',
          confirmButtonColor: '#eab6ac'
        });
        return;
      }

      if (seleccionada.isBefore(hoy)) {
        Swal.fire({
          icon: 'warning',
          title: 'Fecha inválida',
          text: 'No puedes elegir una fecha pasada.',
          confirmButtonColor: '#eab6ac'
        });
        return;
      }
    }


    // Validación: edad dentro de rango
    const edadValor = this.loginForm.get('edad')?.value;
    if (typeof edadValor !== 'number' || edadValor < 18 || edadValor > 60) {
      Swal.fire({
        icon: 'error',
        title: 'Edad inválida',
        text: 'Debes seleccionar una edad válida entre 18 y 60 años.',
        confirmButtonColor: '#eab6ac'
      });
      return;
    }

    // Validación: edad < 21 no puede elegir nivel avanzado
    if (edadValor <= 20 && nivel?.avanzado) {
      Swal.fire({
        icon: 'warning',
        title: 'Nivel no permitido',
        text: 'Los usuarios menores de 21 no pueden seleccionar el nivel avanzado.',
        confirmButtonColor: '#eab6ac'
      });
      return;
    }

    // Validación: no más de un nivel seleccionado
    const nivelesSeleccionados = Object.values(nivel || {}).filter(v => v === true);
    if (nivelesSeleccionados.length > 1) {
      Swal.fire({
        icon: 'warning',
        title: 'Selección inválida',
        text: 'Solo puedes seleccionar un nivel de entrenamiento.',
        confirmButtonColor: '#eab6ac'
      });
      return;
    }

    // Si pasa todas las validaciones
    if (this.loginForm.valid) {
      let nivelSeleccionado = '';
      if (nivel?.basico) nivelSeleccionado = 'basico';
      else if (nivel?.intermedio) nivelSeleccionado = 'intermedio';
      else if (nivel?.avanzado) nivelSeleccionado = 'avanzado';

      const success = this.authService.login(username!, password!, edad!, nivelSeleccionado);
      if (success) {
        const fecha = this.loginForm.get('fecha')?.value;
        if (fecha) {
          localStorage.setItem('fechaSesion', fecha.toISOString());
          this.router.navigate(['/inicio', fecha]);
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: 'Verifica tu usuario y contraseña.',
          confirmButtonColor: '#eab6ac'
        });
      }
    }
  }



  onNivelChange(nivel: string) {
    const nivelGroup = this.loginForm.get('nivel') as FormGroup;

    // Si después del cambio no hay ninguno seleccionado
    const algunoSeleccionado = Object.values(nivelGroup.value).some(val => val);

    // Fuerza validación y muestra error si se desmarcan todos
    if (!algunoSeleccionado) {
      nivelGroup.markAsTouched(); // Para que aparezca el mat-error de se requiere
    }

    nivelGroup.updateValueAndValidity();
  }


  alMenosUnNivelSeleccionado(group: FormGroup): { [key: string]: boolean } | null {
    const { basico, intermedio, avanzado } = group.value;
    return basico || intermedio || avanzado ? null : { nivelRequerido: true };
  }
}
