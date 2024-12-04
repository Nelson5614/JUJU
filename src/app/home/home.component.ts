import { Component } from '@angular/core';
import { HeroComponent } from '../Component/hero/hero.component';
import { StatsSectionComponent } from '../Component/stats/stats.component';
import { FAQSectionComponent } from '../Component/faq/faq.component';
import { AccessSectionComponent } from '../Component/access/access.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [HeroComponent, StatsSectionComponent, FAQSectionComponent, AccessSectionComponent]
})
export class HomeComponent {
}
