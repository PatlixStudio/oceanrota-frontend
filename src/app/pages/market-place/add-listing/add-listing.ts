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

  addListingForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    category: ['', Validators.required],
    boatType: ['', Validators.required],
    boatClass: ['', Validators.required],
    make: ['', Validators.required],
    model: [''],
    hullMaterial: [''],
    capacity: [''],

    price: ['', [Validators.required, Validators.min(1)]],
    currency: ['USD', Validators.required],
    year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
    length_m: ['', [Validators.required, Validators.min(1)]],
    condition: ['', Validators.required],

    country: ['', Validators.required],
    city: ['', Validators.required],
    port: ['', Validators.required],

    engines: this.fb.array([]), // ✅ dynamic engine list
    images: this.fb.control([], Validators.required),
  });


  categories = ['Power', 'Sail', 'Other'];
  boatTypes = ['Sailboat', 'Motorboat', 'Yacht', 'Catamaran', 'Fishing Boat', 'Trawler', 'Speedboat'];
  conditions = ['New', 'Used'];
  currencies = ['USD', 'EUR', 'GBP', 'AUD', 'SGD'];


  get engines() {
    return this.addListingForm.get('engines') as FormArray;
  }

  addEngine() {
    const engineGroup = this.fb.group({
      make: [''],
      power_hp: [''],
      hours: [''],
    });
    this.engines.push(engineGroup);
  }

  removeEngine(index: number) {
    this.engines.removeAt(index);
  }

  /** Convert feet to meters on blur */
  convertFeetToMeters(field: string) {
    const val = this.addListingForm.get(field)?.value;
    if (!val || val <= 0) return;
    if (val > 30) {
      // assume input was in feet (since >30m would be massive)
      const converted = (val * 0.3048).toFixed(2);
      this.addListingForm.get(field)?.setValue(converted);
    }
  }

  /** Image Upload */
  onImageSelected(event: any) {
    const files: FileList = event.target.files;
    console.log("Files", files);
    if (!files || files.length === 0) return;

    this.selectedFiles = files;

    // for preview only
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
    console.log("Create Listing Clicked", this.addListingForm.invalid);
    if (this.addListingForm.invalid) {
      this.addListingForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const listingData = this.addListingForm.value;
    const formData = new FormData();

    console.log("listingData", listingData);
    // append text fields
    Object.keys(listingData).forEach(key => {
      if (key !== 'images' && listingData[key] !== null && listingData[key] !== undefined) {
        formData.append(key, listingData[key]);
      }
    });

    // append images as files
    const files: FileList = this.selectedFiles; // store selected files in onImageSelected
    if (files && files.length) {
      Array.from(files).forEach(file => {
        formData.append('images', file);
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
