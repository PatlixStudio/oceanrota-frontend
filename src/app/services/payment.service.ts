import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable } from 'rxjs';
import { FeaturedPlan } from '@core/enums/featured-plan.enum';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  createFeaturedPayment(listingId: number, featuredPlan: FeaturedPlan): Observable<{ clientSecret: string }> {
    return this.http.post<{ clientSecret: string }>( `${this.apiUrl}/payment/featured`,{ listingId, featuredPlan });
  }
}