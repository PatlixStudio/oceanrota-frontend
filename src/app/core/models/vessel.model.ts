import { Engine } from "./engine.model";

export interface Vessel {
  id?: string;

  /** Basic Info */
  vesselName: string;
  category: string;          // Power / Sail / Other
  boatType?: string;         // e.g. Catamaran, Yacht
  boatClass?: string;        // Cruiser, Motor Yacht
  make?: string;
  model?: string;

  /** Dimensions & Specs */
  length_m?: number;
  beam_m?: number;
  draft_m?: number;
  weight_kg?: number;
  year?: number;
  condition?: string;        // New / Excellent / Used
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

  /** Features */
  features?: Record<string, any>;

  /** Location */
  country?: string;
  city?: string;
  port?: string;

  /** Media */
  images?: string[];

  /** Tokenization (for blockchain) */
  isTokenized?: boolean;
  tokenCode?: string;
  tokenSupply?: number;
  tokenizationStatus?: 'pending' | 'tokenized' | 'failed';
  tokenizationDate?: string;
  vesselWalletAddress?: string;
  tokenIssuerAddress?: string;
  tokenizationTxHash?: string;
  tokenizationFeeUsd?: number;

  /** Ownership */
  ownerId?: number;

  /** Flags */
  isActive?: boolean;
  isSeeded?: boolean;

  /** Timestamps */
  createdAt?: string;
  updatedAt?: string;
}
