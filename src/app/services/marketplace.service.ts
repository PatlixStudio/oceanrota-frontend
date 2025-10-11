import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Boat } from '../core/models/boat.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MarketplaceService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/marketplace';

  // Signal to hold all listings
  listings = signal<Boat[]>([]);

  constructor() {
    this.fetchListings();
  }

  // Fetch all active listings from backend
  fetchListings() {
    this.http.get<Boat[]>(`${this.apiUrl}/listings`).subscribe({
      next: (data) => this.listings.set(data),
      error: (err) => console.error('Failed to fetch listings:', err)
    });
  }

  // Optionally fetch a single listing by id
  getBoatById(id: number) {
    return this.http.get<Boat>(`${this.apiUrl}/listings/${id}`);
  }

  // create a new listing
  createListing(data: FormData): Observable<Boat> {
    return this.http.post<Boat>(`${this.apiUrl}/listings`, data);
  }
}
