export enum VesselPurpose {
  // Private ownership
  PRIVATE = 'private',

  // Charter / Hire
  CHARTER = 'charter',                    // Offered for hire with or without crew
  BAREBOAT_CHARTER = 'bareboat-charter',  // Rented without crew
  CREWED_CHARTER = 'crewed-charter',      // Charter with professional crew
  CABIN_CHARTER = 'cabin-charter',        // Cabin-by-cabin (gulets, catamarans)

  // Commercial operations
  COMMERCIAL = 'commercial',
  PASSENGER_TRANSPORT = 'passenger-transport',
  FREIGHT_TRANSPORT = 'freight-transport',
  FISHING = 'fishing',
  DIVE_SUPPORT = 'dive-support',
  OFFSHORE_SUPPORT = 'offshore-support',
  SUPPLY = 'supply',
  WORKBOAT = 'workboat',

  // Professional / institutional
  RESEARCH = 'research',
  TRAINING = 'training',
  SURVEY = 'survey',
  PILOTAGE = 'pilotage',
  PATROL = 'patrol',
  RESCUE = 'rescue',

  // Government / defense
  MILITARY = 'military',
  COAST_GUARD = 'coast-guard',
  LAW_ENFORCEMENT = 'law-enforcement',

  // Leisure but non-charter
  CLUB_USE = 'club-use',
  EVENTS = 'events',
  RACING = 'racing',

  // Mixed or undefined
  MIXED_USE = 'mixed-use',
  OTHER = 'other',
}