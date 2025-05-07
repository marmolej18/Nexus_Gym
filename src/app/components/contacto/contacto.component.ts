import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { TrellocardsComponent } from '../trellocards/trellocards.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgStyle, TrellocardsComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  hover1 = false;
  hover2 = false;

}
