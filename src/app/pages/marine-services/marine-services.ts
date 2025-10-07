import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MarineServicesService } from '../../services/marine-services.service';
import { MARINE_SERVICE_CATEGORIES } from '../../core/constants/marine-service.categories';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-marine-services',
  imports: [CommonModule, MatInputModule, FormsModule, MatCardModule, MatIconModule, MatButtonModule,MatSelectModule, MatOptionModule],
  templateUrl: './marine-services.html',
  styleUrl: './marine-services.scss'
})
export class MarineServices {
  marineService = inject(MarineServicesService);

  filters = { type: '', location: '' };

  services = this.marineService.services();
  serviceCategories = MARINE_SERVICE_CATEGORIES;

  ngOnInit() {
    
    console.log(this.marineService.fetchServices()); // always fetch fresh listings
  }

  searchServices() {
    console.log('Searching services with filters:', this.filters);
    // TODO: call backend API
  }
}
