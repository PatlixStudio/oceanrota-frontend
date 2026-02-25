import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MarketplaceService } from '../../../services/marketplace.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-add-listing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonToggleModule
  ],
  templateUrl: './add-listing.html',
  styleUrl: './add-listing.scss',
})
export class AddListing {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private marketplaceService = inject(MarketplaceService);

  loading = false;

  featuredImage: string | null = null;
  selectedFiles!: FileList;
  previewImages: string[] = [];

  /** NEW MODEL-CORRECT FORM */
  addListingForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    listingPurpose: ['ALL', Validators.required],
    salePrice: ['', [Validators.required, Validators.min(1)]],
    rentPrice: [''],
    currency: ['USD', Validators.required],
    category: ['', Validators.required],
    featured: [false],
    visibilityType: ['STANDARD', Validators.required],
    featuredPlan: [null], // only required if FEATURED

    vessel: this.fb.group({
      vesselName: ['', Validators.required],
      make: ['', Validators.required],
      model: [''],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      boatType: ['', Validators.required],
      boatClass: ['', Validators.required],
      hullMaterial: [''],

      length_m: ['', [Validators.required, Validators.min(1)]],
      beam_m: [''],
      draft_m: [''],

      condition: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],

      images: [[]], // filled via FormData only

      engines: this.fb.array([]),

      address: this.fb.group({
        address_1: ['', Validators.required],
        address_2: [''],
        country: ['', Validators.required],
        state: ['', Validators.required],
        port: ['', Validators.required],
        city: ['', Validators.required],
        postal_code: ['', Validators.required],
      }),

    }),
  });

  /** Dropdown data */
  categories = ['Power', 'Sail', 'Other'];
  boatTypes = ['Sailboat', 'Motorboat', 'Yacht', 'Catamaran', 'Fishing Boat', 'Trawler', 'Speedboat'];
  listingPurpose = ['ALL', 'SALE', 'RENT'];
  conditions = ['New', 'Used'];
  currencies = ['USD', 'EUR', 'GBP', 'AUD', 'SGD'];



  /** Engines form array */
  get engines() {
    return (this.addListingForm.get('vessel') as FormGroup).get('engines') as FormArray;
  }

  get vesselForm(): FormGroup {
    return this.addListingForm.get('vessel') as FormGroup;
  }

  // Get address FormGroup
  get addressFormGroup(): FormGroup {
    return this.addListingForm.get('vessel.address') as FormGroup;
  }

  setFeatured(img: string) {
    this.featuredImage = img;
  }

  addEngine() {
    this.engines.push(
      this.fb.group({
        make: ['', Validators.required],
        power_hp: ['', Validators.required],
        hours: [''],
        qty: ['', Validators.required]
      })
    );
  }

  removeEngine(index: number) {
    this.engines.removeAt(index);
  }

  /** Image Upload */
  onImageSelected(event: any) {
    const files: FileList = event.target.files;
    if (!files || files.length === 0) return;

    this.selectedFiles = files;

    // Image previews
    const imageUrls: string[] = [];
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        imageUrls.push(e.target.result);
        this.previewImages = [...imageUrls];
      };
      reader.readAsDataURL(file);
    });
  }

  /** Submit form */
  createListing() {
    if (this.addListingForm.invalid) {
      this.addListingForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const payload = this.addListingForm.value;

    // Submit to backend
    this.marketplaceService.createListing(payload).subscribe({
      next: (listing: any) => {
        console.log('Listing created', listing);
        this.loading = false;
        // If there are images → upload them
        if (this.selectedFiles?.length) {
          this.uploadImages(listing.id);
        } else {
          this.finishFlow();
        }
      },
      error: (err) => {
        console.error('Create listing failed', err);
        this.loading = false;
      },
    });
  }

  private uploadImages(listingId: number) {
    const formData = new FormData();

    Array.from(this.selectedFiles).forEach(file => {
      formData.append('images', file);
    });

    this.marketplaceService.uploadListingImages(listingId, formData).subscribe({
      next: (res) => {
        console.log('Images uploaded', res);
        this.finishFlow();
      },
      error: (err) => {
        console.error('Image upload failed', err);
        this.loading = false;
      },
    });
  }

  private finishFlow() {
    this.loading = false;
    this.router.navigate(['/marketplace']);
  }

  get listingPurposeControl() {
    return this.addListingForm.get('listingPurpose');
  }

  isSale(): boolean {
    const value = this.listingPurposeControl?.value;
    return value === 'SALE' || value === 'ALL';
  }

  isRent(): boolean {
    const value = this.listingPurposeControl?.value;
    return value === 'RENT' || value === 'ALL';
  }
}
