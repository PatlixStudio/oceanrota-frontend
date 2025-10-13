import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MarketplaceService } from '../../services/marketplace.service';
import { RouterModule } from '@angular/router';
import { BoatFilter } from "./boat-filter/boat-filter";
import { Boat } from '../../core/models/boat.model';
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
  BoatListings: Boat[] = [];

  listings = this.marketplaceService.listings;
  totalPages = this.marketplaceService.totalPages;
  currentPage = this.marketplaceService.currentPage;
  loading = this.marketplaceService.loading;
  totalListings = this.marketplaceService.totalListings;
  pageLimit = this.marketplaceService.pageLimit;


  // Material paginator setup
  length = this.totalListings();
  pageSize = this.pageLimit();
  pageIndex = this.currentPage() - 1; // mat-paginator is 0-based
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  viewMode: 'grid' | 'list' = 'grid';

  // sorting
  sortOption = this.marketplaceService.sortOption();
  currentFilters: Record<string, any> = {};

  ngOnInit() {
    this.marketplaceService.fetchListings(1, this.pageSize);
    console.log(this.marketplaceService.listings()); // always fetch fresh listings
  }

  sortListings() {
    this.marketplaceService.updateSort(this.sortOption);
    this.marketplaceService.fetchListings(1, this.pageSize, this.sortOption, this.currentFilters);
  }

  // loadListings(filters: any = {}) {
  //   this.marketplaceService.getListings(filters).subscribe((data) => {
  //     this.listings = data;
  //   });
  // }

  onFilterChanged(filters: Record<string, any>) {
    this.currentFilters = filters;
    this.marketplaceService.fetchListings(1, this.pageSize, this.sortOption, filters);
  }

  searchVessels() {
    console.log('Search vessels with filters:', this.filters);
    // TODO: call backend API
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    // mat-paginator index starts from 0, so add 1
    const newPage = event.pageIndex + 1;
    this.marketplaceService.fetchListings(newPage, event.pageSize, this.sortOption, this.currentFilters);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }
}
