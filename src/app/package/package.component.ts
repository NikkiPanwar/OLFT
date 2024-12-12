import { NgFor,NgIf } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { ItineraryResponse, Package,Itinerary,GalleryResponse , Gallery} from '../model/OlftInterface';
import { map } from 'rxjs/operators';

// export interface Package {
//   pk_Package_id: number;           // Unique identifier for the package
//   title: string;                   // Title of the package
//   about: string;                   // Description of the package
//   coordinates: string;             // Coordinates of the location
//   country: string;                 // Country where the package is located
//               // Creation date (consider using Date type if needed)
//   duration: string;                // Duration of the package
//   group_size: number;              // Maximum group size
//   hasItineraries: boolean;         // Indicates if itineraries are available
//   image: string;                   // URL of the package image
//   state: string;                   // State where the package is located
//   tour_guide: number;              // ID of the associated tour guide
//   tour_type: string;               // Type of the tour (e.g., Hill, Beach, etc.)
//   travel_with_bus: string;         // Indicates if travel is with a bus (as a string)
//              // Last updated date (consider using Date type if needed)
//      inclusions: Inclusion[];         // Array of inclusions
//      exclusions: Exclusion[];         // Array of exclusions
// galleries :Gallery[];
//     }

 export interface Exclusion {
 exclusion_id: number; 
  pk_Package_id: number; 
  description: string;   
  isActive: number;     
 created_at: string;   
 updated_at: string;   }

 export interface Include {
  include_id: number; 
  Name: string;       
  isActive: number;   
  created_at: string;
  updated_at: string;
}

export interface Inclusion {
  inclusion_id: number; 
  pk_Package_id: number; 
  include_id: number;   
  isActive: number;     
  created_at: string;   
  updated_at: string;   
  include: Include;    
}         

/*
export interface Gallery {
  image_url: string; 
  pk_Package_id: number;  
  created_at: string;  
  updated_at: string;  }
*/


// export interface Itinerary {
//   id: number;
//   pk_Package_id: number;
//   days: number;
//   title: string;
//   description: string;
//   image: string;
//   created_at: string;
//   updated_at: string;
//   package: any; 
// }

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent implements OnInit{
 
  departure: string = 'Some Departure'; 
  departureTime: string = '10:00 AM';
  returnTime: string = '5:00 PM'; 

  filteredGalleries: Gallery[] = [];
  filteredItineraries: Itinerary[] = [];
  _packages:Package[]=[];
  _galleries:Gallery[]=[];
_itineraries: Itinerary[] =[]

  activeInclusions: Inclusion[] = [];
  excludedItems: Exclusion[] = [];

  activeButton: string = 'button1'; 
  packageId: number | undefined ;
  package: Package | undefined ; 
  
 
  constructor(private route:ActivatedRoute, private _service:ServiceService){

    this.route.params.subscribe(params => {
      this.packageId = +params['id']; 
      console.log(this.packageId);
      this.getPackageDetail(this.packageId);
    });
  }

/*form */

reviewData = {
  name: '',
  email: '',
  message:'',
  title: ''
};

submitReview() {
  console.log('Review submitted:', this.reviewData);
  this.resetReviewForm();
  this.toggleReviewForm();
}

resetReviewForm() {
  this.reviewData = { name: '',email: '',message:'',title:''};
}

isReviewFormVisible: boolean = false;

toggleReviewForm() {
  this.isReviewFormVisible = !this.isReviewFormVisible; 
}

ratings = [
  { name: 'overallrating', label: 'Overall' },
  { name: 'accommodationrating', label: 'Accommodation' },
  { name: 'transportrating', label: 'Transport' },
  { name: 'foodrating', label: 'Food' },
  { name: 'destinationrating', label: 'Destination' },
];

onRatingChange(ratingName: string, value: number) {
  console.log(`Rating for ${ratingName}: ${value}`);
 
}

  openIndex: number | null = null;  
  toggleCollapse(index: number): void {
    if (this.openIndex === index) {
      this.openIndex = null;  // Close if the same plan is clicked
    } else {
      this.openIndex = index;  // Open the clicked plan
    }
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  
  }

  setActiveButton(button: string)
   {
    this.activeButton = button;
  }

 
ngOnInit(): void {
  

this._service.getPackages().subscribe({//popular package
  next:(data)=>{
this._packages= data.slice(0,5);
    console.log(data)
  },

  error:(err)=>{
    console.log(err)
  }
});

if (this.packageId) {
this._service.getGallery(this.packageId).pipe
(map((data:GalleryResponse)=>data.galleries)).subscribe({ //gallery
  next:(data:Gallery[])=>{
this._galleries= data
    console.log('gallery data',data)
    console.log('galleries called');
    if(this._galleries?.length>0)
    {
      this.filterGalleries();
    }
  },
  error:(err)=>{
    console.log(err)
  }
});


if(this.packageId){
this._service.getItineraries(this.packageId).pipe
(map((data:ItineraryResponse)=>data.itineraries)).subscribe({ //itineraries
  next:(data:Itinerary[])=>{
  this._itineraries= data
    console.log('string',data)
    console.log("itinaries called")
    if(this._itineraries?.length > 0){
      this.filterItineraries(); // Filter itineraries after loading them
    }
  },
  error:(err)=>{
    console.log(err)  }  
});
}
}
}


  getPackageDetail(id: number): any {
    if (id) {
      this._service.getPackage(id).subscribe({
        next:(data: Package) =>{
          this.package = data; 
          console.log('Package data:', this.package);

          console.log(this.package?.exclusions)
     //  console.log('Galleries:', this._galleries);
         this.separateInclusions();
        //  this.filterItineraries(); 
        },
        error: (err) => {
          console.error('Error fetching package:', err); 
          console.log(err); 
        }
      });
    } else {
      console.log('No package ID provided'); 
    }
  }

  formatDaysAndNights(nights: any): string {
    if (nights < 1) {
      return '0 days 0 nights';
    }
    const days = nights > 1 ? nights - 1 : 0; // Calculate nights based on days
    return `${days} days ${nights} nights`;
  }


separateInclusions() {
  if (this.package) {
    this.activeInclusions = this.package.inclusions.filter(item => item.isActive === 1);
    
    this.excludedItems = this.package.inclusions.filter(item => item.isActive === 0).map(item => ({
      exclusion_id: item.include_id,
      pk_Package_id: this.package?.pk_Package_id ?? 0, 
      description: item.include.Name, 
      isActive: 0,
      created_at: new Date().toISOString(), 
      updated_at: new Date().toISOString()  
    }));
  }
}

filterItineraries(): void {
  if (this.packageId && this._itineraries.length > 0) {
    this.filteredItineraries = this._itineraries.filter(itinerary =>
       itinerary.pk_Package_id === this.packageId);
       console.log("filtered values",this.filterItineraries)
  }
}

filterGalleries(): void {
  if (this.packageId && this._galleries.length > 0) {
    this.filteredGalleries = this._galleries.filter(gallery =>
      gallery.pk_Package_id === this.packageId);
      console.log("filtered gallery",this.filteredGalleries)
  }
}


chunkedGalleries(galleries: Gallery[], chunkSize: number): Gallery[][] {
  const chunks: Gallery[][] = [];
  for (let i = 0; i < galleries.length; i += chunkSize) {
    chunks.push(galleries.slice(i, i + chunkSize));
  }
  return chunks;
}
}