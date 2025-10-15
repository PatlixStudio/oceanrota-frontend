import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketplaceService } from '../../../services/marketplace.service';
import { Listing } from '../../../core/models/listing.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-boat-details',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './boat-details.html',
  styleUrl: './boat-details.scss'
})
export class BoatDetails {
  private route = inject(ActivatedRoute);
  private marketplaceService = inject(MarketplaceService);

  boat = signal<Listing | null>(null);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.marketplaceService.getBoatById(id).subscribe((res) => {
      this.boat.set(res);
    });
  }
}
