import { Component } from '@angular/core';
import { Icon } from './icons/icon.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  iconNames: Icon[] = [
    { name: 'home', description: 'Homes' },
    { name: 'details', description: 'Mechanics' },
    { name: 'business_center', description: 'Hospitals' },
    { name: 'medical_services', description: 'Medicals' },
    { name: 'h_mobiledata_badge', description: 'Hotels' },
  ];

  scroll(direction: string): void {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      const scrollAmount = 200; // You can adjust this value based on your requirements
      if (direction === 'left') {
        scrollContainer.scrollLeft -= scrollAmount;
      } else {
        scrollContainer.scrollLeft += scrollAmount;
      }
    }
  }
}
