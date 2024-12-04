import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, CommonModule], 
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsSectionComponent {
  stats = [
    { value: "10+", label: "Years in the Field", className: "bg-[#fbba08]/10 text-[#fbba08]" },
    { value: "96%", label: "Client Satisfaction", className: "bg-[#063b77]/10 text-[#063b77]" },
    { value: "5M+", label: "Money Loaned", className: "bg-[#fbba08]/10 text-[#fbba08]" },
  ];

  teamImage = 'https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  collaborationImage = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800';
}