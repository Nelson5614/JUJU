import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  teamImage = 'https://images.pexels.com/photos/5816298/pexels-photo-5816298.jpeg?auto=compress&cs=tinysrgb&w=600';
}