import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MaritimeServicesService } from '../../services/maritime-services.service';
import { MARINE_SERVICE_CATEGORIES } from '../../core/constants/marine-service.categories';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marine-services',
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule
  ],
  templateUrl: './maritime-services.html',
  styleUrl: './maritime-services.scss'
})
export class MaritimeServices {
  maritimeService = inject(MaritimeServicesService);

  filters = { type: '', location: '' };

  services = this.maritimeService.services();
  serviceCategories = MARINE_SERVICE_CATEGORIES;

  ngOnInit() {

    console.log(this.maritimeService.fetchServices()); // always fetch fresh listings
  }

  searchServices() {
    console.log('Searching services with filters:', this.filters);
    // TODO: call backend API
  }
}
