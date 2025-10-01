import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketplaceService } from '../../../services/marketplace.service';
import { Listing } from '../../../core/models/listing.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listing-details',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './listing-details.html',
  styleUrl: './listing-details.scss'
})
export class ListingDetails {
  private route = inject(ActivatedRoute);
  private marketplaceService = inject(MarketplaceService);

  listing = signal<Listing | null>(null);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.marketplaceService.getListingById(id).subscribe((res) => {
      this.listing.set(res);
    });
  }
}
