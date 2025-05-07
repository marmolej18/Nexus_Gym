import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  fechaFormateada: string | null = null;
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); // ✅ Inyectamos ChangeDetectorRef

  constructor() {
    const fechaRaw = localStorage.getItem('fechaSesion');
    
    if (fechaRaw) {
      const partesFecha = fechaRaw.split('T')[0].split('-');
      const anio = partesFecha[0].slice(2);
      const mes = partesFecha[1];
      const dia = partesFecha[2];
      this.fechaFormateada = `${dia}/${mes}/${anio}`;
    }
  }
  
}
