import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MarineService } from '../core/models/marine-service';

@Injectable({ providedIn: 'root' })
export class MarineServicesService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/marine-services';

  // Signal to hold all services
  services = signal<any>([]);

  constructor() {
    this.fetchServices();
  }

  // Fetch all active marine services from backend
  fetchServices() {
    this.http.get(`${this.apiUrl}/services`).subscribe({
      next: (data) => this.services.set(data),
      error: (err) => console.error('Failed to fetch listings:', err)
    });
  }

  // Optionally fetch a single service by id
  getListingById(id: number) {
    return this.http.get<MarineService>(`${this.apiUrl}/services/${id}`);
  }

  // create a new marine service
  createServices(data: FormData): Observable<MarineService> {
    return this.http.post<MarineService>(`${this.apiUrl}/services`, data);
  }
}
