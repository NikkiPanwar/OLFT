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
    address: string; 
    updated_at: string; 
    created_at: string; 
}
export interface DestinationDetails {
  id: number;               
  country: string;          
  image: string;            
  about: string;             
  attraction: string;       
  coordinates: string;      
  created_at: string;        
  updated_at: string;        
}

export interface DestinationResponse {
  success: boolean;          
  data: Destination[];       
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
  pk_Package_id: number;         
  title: string;                 
  about: string;                  
  coordinates: string;           
  country: string;                
  state: string;                  
  duration: string;              
  group_size: number;             
  image: string;                  
  tour_guide: number;            
  tour_type: string;              
  travel_with_bus: string;        
  created_at: string;             
  updated_at: string;             
}
export interface TourGuide {
    id: number;
    captain: string;
    image: string;
    created_at: string; 
    updated_at: string; 
    insta: string;
    phn_number: string;
  }
  
  export interface BlogResponse {
    success: boolean;
    data: Blog[];
  }
  
 export interface Blog {
    id: number;
    title: string;
    by_user: string;
    comment: string;
    primary_image: string;
    secondary_image: string;
    moto1: string;
    moto2: string;
    para1: string;
    para2: string;
    created_at: string; 
    updated_at: string; 
  }

  export interface ClientQuery {
    package_id?: number;     
    fullname: string;        
    email: string;           
    phone: string;        
    message: string;         
  }
  