import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-market-place',
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './market-place.html',
  styleUrl: './market-place.scss'
})
export class MarketPlace {

  marketplaceService = inject(MarketplaceService);

  filters = { keyword: '', location: '' };

  ngOnInit() {
    this.marketplaceService.fetchListings(); // always fetch fresh listings
  }

  searchVessels() {
    console.log('Search vessels with filters:', this.filters);
    // TODO: call backend API
  }
}
