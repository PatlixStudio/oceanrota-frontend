import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StripeService {

  private stripePromise = loadStripe(environment.stripe.publishableKey);

  async getStripe(): Promise<Stripe | null> {
    return this.stripePromise;
  }

}