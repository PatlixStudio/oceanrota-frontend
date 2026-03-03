import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingStatus } from '@core/enums/listing-status.enum';
import { Listing } from '@core/models/listing.model';
import { MarketplaceService } from '@services/marketplace.service';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-review-listing',
  imports: [
    CommonModule,
    MatCardModule,
    GalleryModule,
    MatAccordion,
    MatExpansionModule,
    MatProgressSpinner,
    MatButtonModule
  ],
  templateUrl: './review-listing.html',
  styleUrl: './review-listing.scss'
})
export class ReviewListing {
  vessel = signal<Listing | null>(null);
  galleryItems: GalleryItem[] = [];

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private marketplaceService = inject(MarketplaceService);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.marketplaceService.getVesselById(id).subscribe((res) => {
      this.vessel.set(res);
      this.prepareGallery(res);
    });
  }

  private prepareGallery(listing: Listing) {
    const images = listing.vessel?.images ?? [];
    this.galleryItems = images.map(img => new ImageItem({ src: img, thumb: img }));
  }

  confirm() {
    const currentVessel = this.vessel();
    if (!currentVessel) return;

    const data: Partial<Listing> = {
      status: ListingStatus.ACTIVE,
      isActive: true
    };

    if (!currentVessel.isFeatured && currentVessel.status === ListingStatus.DRAFT) {
      this.marketplaceService.updateListingById(currentVessel.id, data).subscribe({
        next: (res) => {
          // Handle success, e.g. show a success message or navigate away
          console.log('Listing updated successfully:', res);
          this.router.navigate(['/marketplace/vessel', currentVessel.id]);
        },
        error: (err) => {
          // Handle error, e.g. show an error message
          console.error('Failed to update listing:', err);
        }
      });
    }

    if (currentVessel.isFeatured && currentVessel.visibilityType === 'FEATURED') {

    }
  }
}
