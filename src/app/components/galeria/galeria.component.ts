import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Galeria } from '../../galeria';
import { SafePipe } from '../../shared/url.pipe';
import { VideoComponent } from "../video/video.component";

@Component({
  selector: 'app-galeria',
  imports: [CommonModule, MatGridListModule, SafePipe, VideoComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  img: Galeria[] = [
    {  img: 'assets/img/galeria1.jpg' },
    {  img: 'assets/img/galeria2.jpg' },
    {  img: 'assets/img/galeria3.jpg' },
    {  img: 'assets/img/galeria4.jpg' },
    {  img: 'assets/img/galeria5.jpg' },
    {  img: 'assets/img/img4.png' },
    {  img: 'assets/img/galeria7.jpg' },
    {  img: 'assets/img/galeria8.jpg' },
    {  img: 'assets/img/galeria9.jpg' },
    {  img: 'assets/img/galeria10.jpg' },
    {  img: 'assets/img/galeria11.jpg' },
    {  img: 'assets/img/img5.png' },
    {  img: 'assets/img/img3.png' },
    {  img: 'assets/img/img1.png' },
    {  img: 'assets/img/img2.png' },
    {  img: 'assets/img/galeria6.jpg' }
  ];


}


