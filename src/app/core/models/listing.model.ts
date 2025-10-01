import { User } from "./user.model";

export interface Listing {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string; // e.g., Power, Sail, Other
  boatType: string; // e.g., Sailboat, Yacht, etc.
  boatClass: string; // e.g., Motor Yacht, Cruiser
  make: string; // Manufacturer
  year: number;
  length_m: number;
  condition: 'New' | 'Used';
  country: string;
  city: string;
  port: string;
  images: string[]; // gallery of images
  isActive: boolean;
  ownerId: number;

  // relation
  owner?: User; 
  
  createdAt: string;
  updatedAt: string;
}
