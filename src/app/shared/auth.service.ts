import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* Servicio para el manejo de nombres de usuarios permitidos */
  private admins = [
    { username: 'admin1', password: '1234', name: 'Kimbely Guadalupe Marmolejo García',edad: 21, nivel:'intermedio'},
    { username: 'admin2', password: 'abcd', name: 'Alicia Jazmín Díaz Laguna',edad:21,nivel:'basico'},
    { username: 'admin3', password: '2025', name: 'Georgina Salazar Partida',edad:45,nivel: 'avanzado'}
  ];

  login(username: string, password: string, edad: number, nivel: string): boolean {
    const user = this.admins.find(a =>
      a.username === username &&
      a.password === password &&
      a.edad === edad &&
      a.nivel === nivel
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  updateUser(updatedUser: any) {
    const index = this.admins.findIndex(admin => admin.username === updatedUser.username);
    
    if (index !== -1) {
      this.admins[index] = { ...updatedUser }; // Actualizas el admin también
    }
    
    localStorage.setItem('user', JSON.stringify(updatedUser)); // Actualizas también el localStorage
  }
  //----------
  deleteAdmin(username: string) {
    const index = this.admins.findIndex(admin => admin.username === username);
    if (index !== -1) {
      const deleted = this.admins[index];
      // MARCAMOS todos sus campos como "eliminado"
      this.admins[index] = {
        username: deleted.username,
        password: '', // vaciamos password
        name: 'No existen datos para mostrar',
        edad: 0,
        nivel: 'No existen datos para mostrar'
      };
      localStorage.setItem('adminEliminado', deleted.username); // Guardamos su username eliminado
      const currentUser = JSON.parse(localStorage.getItem('user')!);
      if (currentUser?.username === username) {
        this.logout();
      }
      return deleted;
    }
    return null;
  }
  
  
  getAdmins() {
    return [...this.admins];
  }
  
  // Para leer el admin eliminado guardado
  getAdminEliminado() {
    return localStorage.getItem('adminEliminado');
  }
}
