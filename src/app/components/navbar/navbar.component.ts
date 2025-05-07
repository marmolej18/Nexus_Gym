import { Component, Input, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/auth.service';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';  
import { MatListModule } from '@angular/material/list';  
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ClasesComponent } from '../clases/clases.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import 'animate.css';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,  
    MatListModule,
    RouterModule,
    NosotrosComponent,
    ClasesComponent,
    ContactoComponent,
    GaleriaComponent 
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() user: any;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  animateLogo = false;
  triggerAnimation() {
    this.animateLogo = false;
    setTimeout(() => {
      this.animateLogo = true;
    }, 10); // pequeño delay para reiniciar la animación
  }

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenav() {
    this.sidenav.close();
  }
}
