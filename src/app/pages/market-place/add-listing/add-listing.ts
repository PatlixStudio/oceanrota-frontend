import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MarketplaceService } from '../../../services/marketplace.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-listing',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './add-listing.html',
  styleUrl: './add-listing.scss'
})
export class AddListing {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  marketplaceService = inject(MarketplaceService);

  addListingForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(20)]],

    category: ['', Validators.required],   // Power / Sail / Other
    boatType: ['', Validators.required],   // Sailboat, Yacht, etc.
    boatClass: ['', Validators.required],  // Cruiser, Motor Yacht, etc.
    make: ['', Validators.required],       // Sea Ray, Beneteau, etc.

    price: ['', [Validators.required, Validators.min(1)]],
    currency: ['USD', Validators.required],

    year: ['', [
      Validators.required,
      Validators.min(1900),
      Validators.max(new Date().getFullYear())
    ]],

    length_m: ['', [Validators.required, Validators.min(1)]],
    condition: ['', Validators.required],  // New, Used, etc.

    country: ['', Validators.required],
    city: ['', Validators.required],
    port: ['', Validators.required],

    images: this.fb.control([], Validators.required), // Array of image URLs
  });

  categories = ['Power', 'Sail'];
  boatTypes = ['Sailboat', 'Motorboat', 'Yacht', 'Catamaran', 'Fishing Boat', 'Trawler', 'Speedboat'];
  conditions = ['New', 'Used'];
  currencies = ['USD', 'EUR', 'GBP', 'AUD', 'SGD'];

  onImageSelected(event: any) {
    console.log("Image Selected", event);
  }

  createListing() {
    if (this.addListingForm.invalid) {
      this.addListingForm.markAllAsTouched();
      return;
    }

    this.marketplaceService.createListing(this.addListingForm.value).subscribe({
      next: (res: any) => {
        console.log('Listing created', res);
        this.router.navigate(['/marketplace']);
      },
      error: (err: any) => {
        console.error('Error creating listing', err);
      }
    });
  }
}
