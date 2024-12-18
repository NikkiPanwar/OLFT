export interface PackageResponse {
    success: boolean;
    data: Package;
  }

  export interface ItineraryResponse {
    itineraries: Itinerary[];
  }
  
  export interface GalleryResponse {
    galleries: Gallery[];
  }

  export interface Itinerary {
    id: number;
    pk_Package_id: number;
    days: number;
    description: string;
    image: string;
    title: string;
    created_at: string;
    updated_at: string;
  }
  
export interface Package {
    pk_Package_id: number;
    title: string;
    about: string;
    coordinates: string;
    country: string;
    created_at: string;
    duration: string;
    group_size: number;
    image: string;
    state: string;
    tour_guide: number;
    tour_type: string;
    travel_with_bus: string;
    updated_at: string;
  hasItineraries: boolean;
    inclusions: Inclusion[];         
    exclusions: Exclusion[];         
     galleries :Gallery[];  
  }


  export interface Inclusion {
    inclusion_id: number;
    pk_Package_id: number;
    include_id: number;
    isActive: number;
    created_at: any;
    updated_at: any;
    include: Include;
  }

  export interface Exclusion {
    exclusion_id: number;
    pk_Package_id: number;
    description: string;
    isActive: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface Include {
    include_id: number;
    Name: string;
    isActive: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface Gallery {
    id:number;
    image_url: string;
    pk_Package_id: number;
    created_at: string;
    updated_at: string;
  }

   export interface Contact {
    id: number;
    phn_number: string;
    email:string;
    facebook: string;
    insta: string;
    twitter: string;
    location: string;
    address: string; // Corrected from "adrdress"
    updated_at: string; // Consider changing to Date if needed
    created_at: string; // Consider changing to Date if needed
}
export interface DestinationDetails {
  id: number;                // Unique identifier
  country: string;           // Country name
  image: string;             // URL of the destination image
  about: string;             // Description of the country
  attraction: string;        // Famous attraction
  coordinates: string;       // Latitude and longitude
  created_at: string;        // Creation timestamp
  updated_at: string;        // Last updated timestamp
}

export interface DestinationResponse {
  success: boolean;          // Indicates if the request was successful
  data: Destination[];       // Array of destination objects
}

export interface Destination {
  id: number;
  country: string;
  image: string;
  about: string;
  attraction: string;
  coordinates: string;
  created_at: string;
  updated_at: string;
}

export interface EnquiryForm {
  fullName: string;
  email: string;
  phone: string;
  people: number;
  numberOfTickets: number;
  message: string;
}


export interface PopularPackagesResponseCountry {
  success: boolean;
  data: Package[];
}

export interface PackageCountry {
  pk_Package_id: number;          // Unique identifier for the package
  title: string;                  // Title of the package
  about: string;                  // Detailed description of the package
  coordinates: string;            // Geographical coordinates of the location
  country: string;                // Country where the package is located
  state: string;                  // State where the package is located
  duration: string;               // Duration of the tour in days
  group_size: number;             // Maximum group size for the tour
  image: string;                  // URL for the package image
  tour_guide: number;             // Indicates if a tour guide is included (e.g., 1 for true)
  tour_type: string;              // Type of tour (e.g., Hill, Adventure, etc.)
  travel_with_bus: string;        // Indicates if travel by bus is available (e.g., "1" for true)
  created_at: string;             // Timestamp when the package was created
  updated_at: string;             // Timestamp when the package was last updated
}
export interface TourGuide {
    id: number;
    captain: string;
    image: string;
    created_at: string; // Consider using Date if you want to handle date objects
    updated_at: string; // Consider using Date if you want to handle date objects
    insta: string;
    phn_number: string;
  }
