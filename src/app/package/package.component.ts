import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Package {
  pk_Package_id: number;           // Unique identifier for the package
  title: string;                   // Title of the package
  about: string;                   // Description of the package
  coordinates: string;             // Coordinates of the location
  country: string;                 // Country where the package is located
              // Creation date (consider using Date type if needed)
  duration: string;                // Duration of the package
  group_size: number;              // Maximum group size
  hasItineraries: boolean;         // Indicates if itineraries are available
  image: string;                   // URL of the package image
  state: string;                   // State where the package is located
  tour_guide: number;              // ID of the associated tour guide
  tour_type: string;               // Type of the tour (e.g., Hill, Beach, etc.)
  travel_with_bus: string;         // Indicates if travel is with a bus (as a string)
             // Last updated date (consider using Date type if needed)
     inclusions: Inclusion[];         // Array of inclusions
     exclusions: Exclusion[];         // Array of exclusions
}
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

export interface Gallery {
  image_url: string; 
  pk_Package_id: number;  
  created_at: string;  
  updated_at: string;  }



@Component({
  selector: 'app-package',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent implements OnInit{
 
  destination: string = 'Some Destination'; 
  departure: string = 'Some Departure'; 
  departureTime: string = '10:00 AM';
  returnTime: string = '5:00 PM'; 


  _packages:Package[]=[];
  _galleries:Gallery[]=[];
_itineraries:any[]=[];

  activeInclusions: Inclusion[] = [];
  excludedItems: Exclusion[] = [];

  activeButton: string = 'button1'; 
  packageId: number | undefined = 24;
  package: Package | undefined; 
  
  constructor(private route:ActivatedRoute,private _service:ServiceService){
    this.route.params.subscribe(params => {
      this.packageId = +params['id']; 
      console.log(this.packageId);
      this.getPackageDetail(this.packageId)
    });
  }

  // Data for each button
  buttonData = {
    button1: 'Pellentesque sagittis, non fringilla eros molestie.fringilla eros molestia eros molestie.  Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus. In non enim libero.Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus. In non enim libero.onsequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus.',   
    button2:'Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla',
   
    button3: '',
    button4: 'Details related to Button 3 are displayed here.'

  };

  // images = {
  //   img1: 'assets/images/a.jpg',
  //   img2: 'assets/images/b.jpg',
  //   img3: 'assets/images/c.jpg',
  //   img4: 'assets/images/d.jpg',
  //   img5: 'assets/images/e.jpg',
  // };



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
  this.reviewData = {
    name: '',
    email: '',
    message:'',
    title:''
  };
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


  plans= [
    { dayIndex: 1,title: 'DAY 1 : Departure And Small Tour', time: '10:00 AM to 9:00PM',about:'Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.' },
    { dayIndex: 2, title: 'DAY 2 : Visit the main museums and lunch included',  time: '12:00 PM to 9:00PM',about:'Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.' },
    { dayIndex: 3, title: 'DAY 3 : Excursion in the natural oasis and picnic', time: '2:00 PM to 9:00PM',about:'Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.' },
    { dayIndex: 4, title: 'DAY 4 : Transfer to the airport and return to the agency', time: '2:00 PM to 9:00PM',about:'Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.' }

  ];  


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
  
  // if (this.packageId) {
  //   this._service.getPackage(this.packageId).subscribe({
  //     next: (data: Package) => {
  //       this.package = data;  // Assign the received data to the package property
  //       console.log(data);     // Log the data object itself
  //       console.log('hello');  // Log the string 'hello'
  //     },
  //     error: (err) => {
  //       console.error('Error fetching package:', err);  // Log error if the API call fails
  //     }
  //   });
  // } else {
  //   console.log('No packageId provided');
  // }
  

this._service.getPackages().subscribe({//popular package
  next:(data)=>{
this._packages= data.slice(0,5);
    console.log(data)
  },

  error:(err)=>{
    console.log(err)
  }
}),

this._service.getGallery().subscribe({ //gallery
  next:(data)=>{
this._galleries= data
    console.log(data)
  },
  error:(err)=>{
    console.log(err)
  }
}),

this._service.getItineraries().subscribe({ //gallery
  next:(data)=>{
this._itineraries= data
    console.log(data)
  },

  error:(err)=>{
    console.log(err)
  }
});

}


  getPackageDetail(id: number): void {
    if (id) {
      this._service.getPackage(id).subscribe({
        next: (data: Package) =>
         {
          this.package = data; 
         this.separateInclusions();
        },
        error: (err) => {
          console.error('Error fetching package:', err); // Log the error
          console.log(err); // Additional error message
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
}
