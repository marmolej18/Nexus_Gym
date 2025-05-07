import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ResumenComponent
  ],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {
  private router = inject(Router);
  usuario: any = null;
  editando = false;
  private authService = inject(AuthService);
  admins = this.authService.getAdmins();
  adminEliminado: string | null = localStorage.getItem('adminEliminado');//Guarda el admin eliminado
  editandoUsername: string | null = null;
  displayedColumns: string[] = ['username', 'name', 'edad', 'nivel', 'acciones'];
  nivelesDisponibles: string[] = ['basico', 'intermedio', 'avanzado'];

  ngOnInit(): void {
    const data = localStorage.getItem('user');
    this.usuario = data ? JSON.parse(data) : null;
  }


  eliminar(username: string) {
    const currentUser = JSON.parse(localStorage.getItem('user')!);

    const eliminado = this.authService.deleteAdmin(username);

    // Si eliminó al usuario logeado, redirige al login
    if (currentUser?.username === username) {
      this.router.navigate(['/login']);
      return; // importante: salir después del redirect
    }

    this.admins = this.authService.getAdmins();
    this.adminEliminado = localStorage.getItem('adminEliminado');
  }

  editar(username: string) {
    this.editandoUsername = username;
  }

  guardar(admin: any) {
    this.authService.updateUser({
      username: admin.username,
      password: admin.password,
      name: admin.name,
      edad: admin.edad,
      nivel: admin.nivel
    });

    this.editandoUsername = null;
    this.admins = this.authService.getAdmins();
  }  
}
