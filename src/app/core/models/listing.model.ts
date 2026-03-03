import { Vessel } from "./vessel.model";
import { User } from "./user.model";
import { ListingStatus } from "@core/enums/listing-status.enum";

export interface Listing {
  id: number;

  /** Marketplace display info */
  title: string;
  description: string;
  category: string;
  salePrice?: number;
  rentPrice?: number;
  currency?: string;
  status?: ListingStatus;
  visibilityType?: string; // e.g. 'STANDARD', 'PREMIUM', 'EXCLUSIVE'
  listingType?: string; // e.g. 'SALE', 'RENT', 'ALL'

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
