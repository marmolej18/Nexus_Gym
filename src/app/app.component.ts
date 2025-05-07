import { Component, inject } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    RouterModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    edad: [null, Validators.required],  
    nivel: this.fb.group({
      basico: [false],
      intermedio: [false],
      avanzado: [false]
    })
    
  });
  
  errorMessage = '';

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get currentUser() {
    return this.authService.getUser();
  }

  login() {
    const { username, password, edad, nivel } = this.loginForm.value;
  
    let nivelSeleccionado = '';
    if (nivel?.basico) nivelSeleccionado = 'basico';
    else if (nivel?.intermedio) nivelSeleccionado = 'intermedio';
    else if (nivel?.avanzado) nivelSeleccionado = 'avanzado';
  
    const success = this.authService.login(username!, password!, edad!, nivelSeleccionado);
    if (success) {
      this.router.navigate(['/inicio']);
    } else {
      this.errorMessage = 'Credenciales incorrectas.';
    }
  }
  
  
}
