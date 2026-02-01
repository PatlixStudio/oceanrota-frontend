import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MaritimeService } from '../../../core/models/maritime-service';

@Component({
  selector: 'app-maritime-service-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './maritime-service-details.html',
  styleUrls: ['./maritime-service-details.scss']
})
export class MaritimeServiceDetails implements OnInit {

  private route = inject(ActivatedRoute);

  marineService!: MaritimeService;

  ngOnInit(): void {
    const serviceId = this.route.snapshot.paramMap.get('id');
    
    // TODO: Fetch the marine service from backend by ID
    // For now, using a dummy object:
    this.marineService = {
      id: serviceId || '1',
      serviceName: 'Boat Cleaning Service',
      description: 'Full exterior and interior cleaning service for your vessel. Includes deck washing, cabin cleaning, and hull polishing.',
      category: 'Cleaning',
      price: 250,
      currency: 'USD',
      durationHours: 4,
      owner: {
        username: 'CaptainJohn',
        avatarUrl: './assets/images/marine_icons/sailor.png'
      }
    };
  }

  onContactOwner(): void {
    console.log('Contacting owner:', this.marineService.owner.username);
    // TODO: open chat or send request
  }
}
