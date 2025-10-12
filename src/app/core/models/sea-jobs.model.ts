export interface SeaJob {
  id?: number;
  title: string;
  description: string;
  position: string;        // e.g., Captain, Engineer
  location?: string;
  requiredExperience?: number; // years
  certifications?: string[];
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
