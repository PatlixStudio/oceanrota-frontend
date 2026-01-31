import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { SailBoatTypes } from '../../../core/constants/sail-boat.types';
import { PowerBoatTypes } from '../../../core/constants/power-boat.types';
import { HullTypes } from '../../../core/constants/hull-material.types';

@Component({
  selector: 'app-boat-filter',
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatAccordion,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule
  ],
  templateUrl: './boat-filter.html',
  styleUrl: './boat-filter.scss'
})
export class BoatFilter {
  @Output() filterChanged = new EventEmitter<any>();
  private fb = inject(FormBuilder);

  filterForm: FormGroup = this.fb.group({
    category: [''],
    condition: ['All'],
    country: [''],
    minPrice: [''],
    maxPrice: [''],
    minLength: [''],
    maxLength: [''],
    year: [''],
    hull_material: [''],
    listingType: ['All']
  });


  categories = ['Power', 'Sail', 'Other'];
  conditions = ['New', 'Used'];
  listing_type = ['Sale', 'Rent'];


  sailBoatTypes = SailBoatTypes;
  powerBoatTypes = PowerBoatTypes;
  hullTypes = HullTypes;

  applyFilter() {
    const filters = this.filterForm.value;
    this.filterChanged.emit(filters);
  }

  resetFilter() {
    this.filterForm.reset({
      listingType: 'All',
      condition: 'All',
    });
    this.applyFilter();
  }
}
