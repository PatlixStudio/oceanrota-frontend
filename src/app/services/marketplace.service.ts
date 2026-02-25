import { computed, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { Listing } from '../core/models/listing.model';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MarketplaceService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/marketplace';

  // Signal to hold all listings
  listings = signal<Listing[]>([]);
  totalListings = signal<number>(0);
  currentPage = signal<number>(1);
  pageLimit = signal<number>(10);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  // 🔹 Derived signal (computed)
  totalPages = computed(() =>
    Math.ceil(this.totalListings() / this.pageLimit())
  );

  sortOption = signal<string>('Recommended');

  constructor() {
    this.fetchListings();
  }

  fetchListings(page = 1, limit = 10, sort = 'newest', filters: any = {}) {
    this.loading.set(true);

    let params = new HttpParams()
      .set('page', page)
      .set('limit', limit)
      .set('sort', sort);

    // Dynamically add filters
    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (value !== null && value !== undefined && value !== '' && value !== 'All') {
        params = params.set(key, value);
      }
    });

    this.http.get<{ data: Listing[]; total: number; page: number; limit: number }>(
      `${this.apiUrl}/listings`,
      { params }
    )
      .pipe(
        tap((res) => {
          this.listings.set(res.data);
          this.totalListings.set(res.total);
          this.error.set(null);
        }),
        catchError((err) => {
          console.error('Failed to fetch listings:', err);
          this.error.set('Failed to load listings');
          throw err;
        }),
        tap(() => this.loading.set(false))
      )
      .subscribe();
  }

  updateSort(sort: string) {
    this.sortOption.set(sort);
  }

  // Optionally fetch a single listing by id
  getBoatById(id: number) {
    return this.http.get<Listing>(`${this.apiUrl}/listings/${id}`);
  }

  // create a new listing
  createListing(data: FormData): Observable<Listing> {
    return this.http.post<Listing>(`${this.apiUrl}/listings`, data);
  }

  uploadListingImages(listingId: number, formData: FormData) {
    return this.http.post(
      `${this.apiUrl}/listings/${listingId}/images`,
      formData
    );
  }
}
