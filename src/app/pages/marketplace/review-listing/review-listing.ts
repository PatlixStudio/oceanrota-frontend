import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { FeaturedPlan } from '@core/enums/featured-plan.enum';
import { ListingStatus } from '@core/enums/listing-status.enum';
import { ListingVisibilityType } from '@core/enums/listing-visibiliy.enum';
import { Listing } from '@core/models/listing.model';
import { MarketplaceService } from '@services/marketplace.service';
import { PaymentService } from '@services/payment.service';
import { StripeService } from '@services/stripe.service';
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
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private marketplaceService = inject(MarketplaceService);
  private paymentService = inject(PaymentService);
  private stripeService = inject(StripeService);

  vessel = signal<Listing | null>(null);
  galleryItems: GalleryItem[] = [];
  clientSecret = signal<string | null>(null);
  loadingPayment = signal(false);

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

    if (currentVessel.status === ListingStatus.DRAFT && currentVessel.visibilityType === ListingVisibilityType.STANDARD && !currentVessel.isFeatured) {
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

    if (currentVessel.isFeatured && currentVessel.visibilityType === ListingVisibilityType.FEATURED) {
      this.startFeaturedPayment(currentVessel.id, currentVessel.featuredPlan!);
    }
  }

  private startFeaturedPayment(listingId: number, featuredPlan: FeaturedPlan) {

    this.loadingPayment.set(true);

    this.paymentService.createFeaturedPayment(listingId, featuredPlan).subscribe({
      next: async (res) => {

        this.clientSecret.set(res.clientSecret);
        console.log('Received client secret for payment:', res.clientSecret);

        await this.payWithStripe();

      },
      error: (err) => {
        console.error('Payment creation failed', err);
        this.loadingPayment.set(false);
      }
    });

  }

  private async payWithStripe() {

    const secret = this.clientSecret();
    if (!secret) return;

    const stripe = await this.stripeService.getStripe();

    const { error, paymentIntent } = await stripe!.confirmCardPayment(secret, {
      payment_method: {
        card: {
          token: 'tok_visa'
        }
      }
    });

    if (error) {
      console.error('Stripe payment failed:', error);
      this.loadingPayment.set(false);
    } else {

      console.log('Payment successful:', paymentIntent);

      const vessel = this.vessel();
      if (vessel) {
        this.router.navigate(['/marketplace/vessel', vessel.id]);
      }

    }
  }

}
