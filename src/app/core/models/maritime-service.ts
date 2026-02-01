export interface MaritimeService {
  id: string;
  serviceName: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  durationHours: number;
  owner: {
    username: string;
    avatarUrl?: string;
  };
}