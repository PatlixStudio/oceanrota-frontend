import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-marine-services',
  imports: [CommonModule, MatInputModule, FormsModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './marine-services.html',
  styleUrl: './marine-services.scss'
})
export class MarineServices {
  filters = { type: '', location: '' };

  services = [
    {
      name: 'Atlantic Ship Maintenance',
      type: 'Maintenance',
      location: 'Miami, USA',
      description: 'Full-service vessel maintenance including engine, hull, and electronics.'
    },
    {
      name: 'Ocean Training Academy',
      type: 'Training',
      location: 'Rotterdam, Netherlands',
      description: 'Professional maritime training for captains, engineers, and crew.'
    },
    {
      name: 'Global Charter Support',
      type: 'Logistics',
      location: 'Singapore',
      description: 'End-to-end support for yacht and cargo charter operations worldwide.'
    }
  ];

  searchServices() {
    console.log('Searching services with filters:', this.filters);
    // TODO: call backend API
  }
}
