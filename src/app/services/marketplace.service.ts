import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import type { Listing } from '../core/models/listing.model';

@Injectable({ providedIn: 'root' })
export class MarketplaceService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/marketplace';

  // Signal to hold all listings
  listings = signal<Listing[]>([]);

  constructor() {
    this.fetchListings();
  }

  // Fetch all active listings from backend
  fetchListings() {
    this.http.get<Listing[]>(`${this.apiUrl}/listings`).subscribe({
      next: (data) => this.listings.set(data),
      error: (err) => console.error('Failed to fetch listings:', err)
    });
  }

  // Optionally fetch a single listing by id
  getListingById(id: number) {
    return this.http.get<Listing>(`${this.apiUrl}/listings/${id}`);
  }
}
