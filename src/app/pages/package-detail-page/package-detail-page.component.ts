import { Component, OnInit } from '@angular/core';
import { ClientQuery, EnquiryForm, Exclusion, Gallery, GalleryResponse, Inclusion, Itinerary, ItineraryResponse, Package } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{finalize, map} from 'rxjs/operators';

@Component({
  selector: 'app-package-detail-page',
  templateUrl: './package-detail-page.component.html',
  styleUrl: './package-detail-page.component.css'
})
export class PackageDetailPageComponent implements OnInit {

  departure: string = 'Some Departure'; 
  departureTime: string = '10:00 AM';
  returnTime: string = '5:00 PM'; 
  isReviewFormVisible: boolean = false;
  isDisabled:boolean = true;

  
  filteredGalleries: Gallery[] = [];
  filteredItineraries: Itinerary[] = [];
  excludedItems: Exclusion[] = [];
  activeInclusions: Inclusion[] = [];
 
  _itineraries: Itinerary[] =[]
  _packages:Package[]=[];
  _galleries:Gallery[]=[];

  
  packageId: number | undefined ;
  package: Package | undefined ; 
  enquiryForm!: FormGroup;

  activeButton: string = 'button1'; 
 
constructor(private _service:MasterService,private route:ActivatedRoute, private formBuilder:FormBuilder)
   {
this.enquiryForm  
this.enquiryForm = this.formBuilder.group({
  fullname: ['', Validators.required],
  email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
  phone: ['', [Validators.required, Validators.pattern(/^(\+?[0-9]{1,3})?([0-9\-\(\)\/\.]?\s?){6,15}[0-9]$/)]],
  message: ['', Validators.required],
});


    // Get the package ID from the route params
      this.route.params.subscribe(params => {
        this.packageId = +params['id']; 
        console.log(this.packageId);

        this.getPackageDetail(this.packageId);
      });
    }


ngOnInit(): void {
  this.popularPackages();
  this.Gallery();
  this.Itinerary();
}

 // Fetch popular packages
popularPackages(){
  this._service.getPackages().subscribe({
    next:(data)=>{
  this._packages= data.slice(0,5);
      console.log(data)
    },
  
    error:(err)=>{
      console.log(err)
    }
  });
}

// Fetch itinerary based on packageId
Itinerary(){
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

    // Fetch gallery based on packageId

    Gallery(){
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
            console.log(err) }
 });
}  
 }

 // Fetch the package details


 getPackageDetail(id: number): any {
  if (id) {
    this._service.getPackage(id).subscribe({
      next:(data: Package) =>{
        this.package = data; 
        console.log('Package data:', this.package);

        console.log(this.package?.exclusions)
       this.separateInclusions();
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

 // Separate active and inactive inclusions
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

 // Filter itineraries by packageId
 filterItineraries(): void {
  if (this.packageId && this._itineraries.length > 0) {
    this.filteredItineraries = this._itineraries.filter(itinerary =>
       itinerary.pk_Package_id === this.packageId);
       console.log("filtered values",this.filterItineraries)
  }
}
 // Filter galleries by packageId
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


  // Submit the enquiry form
 onSubmit(): void{
   this.isDisabled = true
  if (this.enquiryForm?.valid && this.packageId ) {
      let package_id = this.packageId
      let enquiryData : ClientQuery = {...this.enquiryForm.value,package_id  }
    console.log("hello submit form")
    console.log(this.enquiryForm.value)


    this._service.postFormData(enquiryData).pipe(finalize(()=> this.enquiryForm.reset()) ) .subscribe(
      {
      next: (response:any) => {
        console.log('Enquiry submitted successfully', response);
        this.enquiryForm.reset(); 
        this.isDisabled = false;
       
      },
      error: (err) => {
        console.log('Error submitting enquiry', err);
        this.isDisabled = false
        
      },
    }
  );
  }
  }

//days calculate
  formatDaysAndNights(nights: any): string {
    if (nights < 1) {
      return '0 days 0 nights';
    }
    const days = nights > 1 ? nights - 1 : 0; 
    return `${days} days ${nights} nights`;
  }

 //Tab Button
  setActiveButton(button: string) {
    this.activeButton = button;
   }


    openIndex: number | null = null;  
    toggleCollapse(index: number): void {
      if (this.openIndex === index) {
        this.openIndex = null;  
      } else {
        this.openIndex = index;  
      }
    }
  
    isOpen(index: number): boolean {
      return this.openIndex === index;}
 
//form data
toggleReviewForm() {
  this.isReviewFormVisible = !this.isReviewFormVisible; 
}

submitReview() {
  console.log('Review submitted:', this.reviewData);
  this.resetReviewForm();
  this.toggleReviewForm();
}

resetReviewForm() {
  this.reviewData = { name: '',email: '',message:'',title:''};
}
reviewData = {
  name: '',
  email: '',
  message:'',
  title: ''
};


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
}