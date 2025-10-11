import { Engine } from "./engine.model";

export interface Boat {
  id?: number;

  /** Basic Info */
  title: string;
  description: string;
  category: string; // Power / Sail / Other
  boatType?: string; // e.g., Catamaran, Yacht
  boatClass?: string; // Cruiser, Motor Yacht
  make?: string;
  model?: string;

  /** Pricing */
  price?: number;
  currency?: string; // USD, EUR, etc.

  /** Location */
  country?: string;
  city?: string;
  port?: string;

  /** Specifications */
  length_m?: number;
  beam_m?: number;
  draft_m?: number;
  weight_kg?: number;
  year?: number;
  condition?: string; // New / Excellent / Used
  hullMaterial?: string;
  capacity?: string;

  /** Accommodations */
  guestCabins?: number;
  guestHeads?: number;

  /** Tanks */
  fuelTank_liter?: number;
  waterTank_liter?: number;
  holdingTank_liter?: number;

  /** Engines */
  engines?: Engine[];

  /** Features (JSON) */
  features?: Record<string, any>;

  /** Media */
  images?: string[];

  /** Status */
  status?: 'draft' | 'published' | 'sold';

  /** Owner Info */
  ownerId?: number;
  owner?: {
    id: number;
    username: string;
    avatarUrl?: string;
  };

  /** Flags */
  isActive?: boolean;
  isSeeded?: boolean;

  /** Timestamps */
  createdAt?: string;
  updatedAt?: string;
}
