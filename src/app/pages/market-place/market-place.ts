import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MarketplaceService } from '../../services/marketplace.service';
import { RouterModule } from '@angular/router';
import { BoatFilter } from "./boat-filter/boat-filter";
import { Listing } from '../../core/models/listing.model';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-market-place',
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    BoatFilter,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule
  ],
  templateUrl: './market-place.html',
  styleUrl: './market-place.scss'
})
export class MarketPlace {

  marketplaceService = inject(MarketplaceService);

  filters = { keyword: '', location: '' };
  listings: Listing[] = [];

  sortOption: string = 'newest';
  filteredListings = this.marketplaceService.listings();
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;


  ngOnInit() {
    this.marketplaceService.fetchListings();
    console.log(this.marketplaceService.listings()); // always fetch fresh listings
  }

  sortListings() {
    const listings = [...this.marketplaceService.listings()];
    switch (this.sortOption) {
      case 'priceLow':
        this.filteredListings = listings.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'priceHigh':
        this.filteredListings = listings.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'yearNew':
        this.filteredListings = listings.sort((a, b) => (b.year || 0) - (a.year || 0));
        break;
      case 'yearOld':
        this.filteredListings = listings.sort((a, b) => (a.year || 0) - (b.year || 0));
        break;
      default:
        this.filteredListings = listings.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
    }
  }
  // loadListings(filters: any = {}) {
  //   this.marketplaceService.getListings(filters).subscribe((data) => {
  //     this.listings = data;
  //   });
  // }

  onFilterChanged(filters: any) {
    // this.loadListings(filters);
  }

  searchVessels() {
    console.log('Search vessels with filters:', this.filters);
    // TODO: call backend API
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
