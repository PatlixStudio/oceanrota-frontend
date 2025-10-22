import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketplaceService } from '../../../services/marketplace.service';
import { Listing } from '../../../core/models/listing.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-boat-details',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    GalleryModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  templateUrl: './boat-details.html',
  styleUrl: './boat-details.scss'
})
export class BoatDetails {
  private route = inject(ActivatedRoute);
  private marketplaceService = inject(MarketplaceService);

  boat = signal<Listing | null>(null);
  galleryItems: GalleryItem[] = [];

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.marketplaceService.getBoatById(id).subscribe((res) => {
      this.boat.set(res);
      this.prepareGallery(res);
    });
  }

  private prepareGallery(listing: Listing) {
    const images = listing.vessel?.images ?? [];
    this.galleryItems = images.map(img => new ImageItem({ src: img, thumb: img }));
  }

  selectImage(image: any) {
    // You can programmatically open the lightbox with the selected image if needed
    // e.g. this.gallery.openLightbox(imageIndex);
  }
}
