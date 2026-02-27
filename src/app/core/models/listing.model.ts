import { Vessel } from "./vessel.model";
import { User } from "./user.model";

export interface Listing {
  id?: number;

  /** Marketplace display info */
  title: string;
  description: string;
  category: string;
  salePrice?: number;
  rentPrice?: number;
  currency?: string;
  status?: 'DRAFT' | 'ACTIVE' | 'INACTIVE' | 'SOLD' | 'RENTED';

  /** Owner */
  ownerId?: number;
  owner?: User;

  /** Vessel relation */
  vesselId?: string;
  vessel?: Vessel;

  /** Featured / Promotion Flags */
  isFeatured?: boolean;
  featuredFeeUsd?: number;
  featuredUntil?: string | null;

  isNewArrival?: boolean;
  isPriceReduced?: boolean;
  isVerified?: boolean;

  /** Optional Flags */
  isActive?: boolean;
  isSeed?: boolean;

  /** Timestamps */
  createdAt?: string;
  updatedAt?: string;
}
