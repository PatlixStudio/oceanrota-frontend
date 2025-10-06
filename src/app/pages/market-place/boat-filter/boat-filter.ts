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
    condition: [''],
    country: [''],
    minPrice: [''],
    maxPrice: [''],
    minLength: [''],
    maxLength: [''],
    year: [''],
  });


  categories = ['Power', 'Sail', 'Other'];
  conditions = ['New', 'Used', 'Excellent', 'Good'];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  applyFilter() {
    const filters = this.filterForm.value;
    this.filterChanged.emit(filters);
  }

  resetFilter() {
    this.filterForm.reset();
    this.filterChanged.emit({});
  }
}
