export enum VesselClass {
  // Power & Sail Yachts
  MOTOR_YACHT = 'motor-yacht',
  SAILING_YACHT = 'sailing-yacht',
  SUPERYACHT = 'superyacht',          // ~24m–60m
  MEGA_YACHT = 'mega-yacht',          // 60m+

  // Multihulls
  POWER_CATAMARAN = 'power-catamaran',
  SAIL_CATAMARAN = 'sail-catamaran',
  TRIMARAN = 'trimaran',

  // Cruising & Displacement
  TRAWLER = 'trawler',
  EXPEDITION_YACHT = 'expedition-yacht',
  PILOTHOUSE = 'pilothouse',
  MOTORYACHT_DISPLACEMENT = 'displacement-motoryacht',

  // Performance & Sport
  SPORTFISHER = 'sportfisher',
  PERFORMANCE_BOAT = 'performance-boat',
  HIGH_PERFORMANCE = 'high-performance',

  // Small Craft
  DAYBOAT = 'dayboat',
  RUNABOUT = 'runabout',
  TENDER = 'tender',
  DINGHY = 'dinghy',
  PERSONAL_WATERCRAFT = 'personal-watercraft',

  // Commercial / Professional
  COMMERCIAL_VESSEL = 'commercial-vessel',
  WORKBOAT = 'workboat',
  PASSENGER_VESSEL = 'passenger-vessel',
  FERRY = 'ferry',
  CREW_BOAT = 'crew-boat',
  PILOT_BOAT = 'pilot-boat',
  TUGBOAT = 'tugboat',
  BARGE = 'barge',
  SUPPLY_VESSEL = 'supply-vessel',
  OFFSHORE_SUPPORT_VESSEL = 'offshore-support-vessel',

  // Fishing
  COMMERCIAL_FISHING = 'commercial-fishing',
  SPORT_FISHING = 'sport-fishing',

  // Specialty
  HOUSEBOAT = 'houseboat',
  ICE_CLASS_VESSEL = 'ice-class-vessel',
  RESEARCH_VESSEL = 'research-vessel',
  MILITARY_VESSEL = 'military-vessel',

  // Fallback
  OTHER = 'other',
}