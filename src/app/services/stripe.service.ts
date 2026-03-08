import { environment } from '../../environments/environment';
import { Stripe } from '@stripe/stripe-js';
import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class StripeService {

  private stripePromise = loadStripe(environment.stripe.publishableKey);

  async getStripe(): Promise<Stripe | null> {
    console.log('Loading Stripe with publishable key:', environment.stripe.publishableKey);
    return this.stripePromise;
  }

}