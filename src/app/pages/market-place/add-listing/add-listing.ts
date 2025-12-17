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

  selectedFiles!: FileList;
  previewImages: string[] = [];

  /** NEW MODEL-CORRECT FORM */
  addListingForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    listingType: ['', Validators.required],
    salePrice: ['', [Validators.required, Validators.min(1)]],
    rentPrice: [''],
    currency: ['USD', Validators.required],

    category: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    port: ['', Validators.required],

    featured: [false],

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
    }),
  });

  /** Dropdown data */
  categories = ['Power', 'Sail', 'Other'];
  boatTypes = ['Sailboat', 'Motorboat', 'Yacht', 'Catamaran', 'Fishing Boat', 'Trawler', 'Speedboat'];
  listingTypes = ['All', 'Sale', 'Rent'];
  conditions = ['New', 'Used'];
  currencies = ['USD', 'EUR', 'GBP', 'AUD', 'SGD'];

  featuredImage: string | null = null;

  /** Engines form array */
  get engines() {
    return (this.addListingForm.get('vessel') as FormGroup).get('engines') as FormArray;
  }

  get vesselForm(): FormGroup {
    return this.addListingForm.get('vessel') as FormGroup;
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
    const formValue = this.addListingForm.value;

    const formData = new FormData();

    if (this.featuredImage) {
      formData.append("featuredImage", this.featuredImage);
    }

    /** Append listing root fields */
    formData.append('title', formValue.title);
    formData.append('description', formValue.description);
    formData.append('salePrice', formValue.salePrice);
    formData.append('rentPrice', formValue.rentPrice);
    formData.append('currency', formValue.currency);

    formData.append('category', formValue.category);
    formData.append('city', formValue.city);
    formData.append('country', formValue.country);
    formData.append('port', formValue.port);

    /** Append vessel fields */
    const vessel = formValue.vessel;

    Object.keys(vessel).forEach(key => {
      if (key !== 'engines' && key !== 'images') {
        formData.append(`vessel.${key}`, vessel[key]);
      }
    });

    /** Append engines */
    vessel.engines.forEach((engine: any, index: number) => {
      Object.keys(engine).forEach(key => {
        formData.append(`vessel.engines[${index}].${key}`, engine[key]);
      });
    });

    /** Append uploaded images */
    if (this.selectedFiles) {
      Array.from(this.selectedFiles).forEach(file => {
        formData.append('vessel.images', file);
      });
    }

    this.marketplaceService.createListing(formData).subscribe({
      next: (res) => {
        console.log('Listing created', res);
        this.loading = false;
        this.router.navigate(['/marketplace']);
      },
      error: (err) => {
        console.error('Error creating listing', err);
        this.loading = false;
      },
    });
  }
}
