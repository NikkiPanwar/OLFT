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

