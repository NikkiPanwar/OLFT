import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs';
import { Contact, Destination, Package, PackageCountry, TourGuide } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';

@Component({
  selector: 'app-home',
  providers:[MasterService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

 //  _topCountry: any[] = [];
  private _dataLoaded: boolean = false;

  _packages:Package[] = []
  _tourguides:TourGuide[] =[]
_footer:Contact[]=[];
_destinations:Destination[]=[];

 _topCountry: PackageCountry[] = [];

country:string ='India';
packageId: number | undefined ;

  formatDaysAndNights(nights: any): string {
    if (nights < 1) {
      return '0 days 0 nights';
    } 
    const days = nights > 1 ? nights - 1 : 0; // Calculate nights based on days
    return `${days} days ${nights} nights`;
  }

constructor(private _service:MasterService, private router:Router, private route:ActivatedRoute)
  {
    // this.route.params.subscribe(params => {
    //   this.packageId = +params['id']; 
    //   console.log(this.packageId,"edd");
    //   console.log("hello home page package id")
    // });

    // this.route.params.subscribe((params) => {
    //   this.country = params['country'];
    //   console.log('Country:', this.country);
    // });  
  }
  
//total no of packages 
  ngOnInit(): void {

    this._service.getPackages().subscribe({
      next:(data)=>{
        this._packages = data;
        console.log(data)
      },
      error:(err)=>{
        console.log(err)}
    });

    //tourguides
    this._service.getTourGuides().subscribe({
      next:(data)=>{
this._tourguides = data.slice(0,3);
    console.log(data)
      },
      error:(err)=>{
        console.log(err) }
    });
    
   //total no of destinations
this._service.getDestinations().subscribe({
      next:(data)=>{
          this._destinations = data;
        console.log("destinations called", this._destinations);
      },
      error:(err)=>{
        console.log(err)}
    });

    
//pakages according to country 
    this._service.getPackagesCountry(this.country).subscribe({
      next: (response) => {
        if (response.success) {
          this._topCountry = response.data;
          console.log(response.data,"country list")
        }
      },
      error: (err) => {
        console.log(err);
      }
    });

//footer information
    this._service.getFooter().subscribe({
      next:(data)=>{
        this._footer=data;
        console.log("contacts",data);
      },
      error:(err)=>{
        console.log(err)}
    });
  }


  // getcountByCountry(country:string):number{
  //   console.log(country)
  //   this._service.getPackagesCountry(this.country).pipe(first).subscribe({
  //     next: (response) => {
  //       if (response.success) {
  //         this._topCountry = response.data;
  //         console.log(response.data,"country list")
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });

  //   if(this._topCountry.length){
  //     return this._topCountry.length
  //   }
  //   return 0;
  // }
  getcountByCountry(country: string): number {
    console.log(country);
  if (this._dataLoaded && this._topCountry.length) {
    return (this._topCountry.length); // Return cached data if already fetched
  }

  this._service.getPackagesCountry(country).pipe(
    first(), // Get the first emitted value
    map(response => {
      if (response.success) {
        this._topCountry = response.data; // Cache the fetched data
        this._dataLoaded = true; // Set flag to indicate data is loaded
         this._topCountry.length; // Return the length
      }
      return 0; // Default to 0 if no data or unsuccessful response
    })
  ).subscribe()
  
  if(this._topCountry.length){
    return this._topCountry.length
  }
  return this._topCountry.length

}

  

  bookNow2(country:string): void {
    this.router.navigate(['/package2', country]); 
  }
  
  bookNow(packageId: number) {
    this.router.navigate(['/package', packageId]);
  }

  

/*data for cards*/

  reviews = [
    {
      name: 'Raju Adakalli',
      photo: 'assets/images/1.jpg',  // Ensure the image path is correct
      rating: 5,
      reviewText: `Thank u entire team of Funstay for the meaningful & memorable trip of Vietnam!!! Must say everyone in the group mingled as one family during the entire tour and created unforgettable moments & memories for all for lifetime! Thank u all.`
    },
    {
      name: 'Anita Verma',
      photo: 'assets/images/2.jpg',
      rating: 4,
      reviewText: `Had a wonderful experience on our Bali trip! The team was amazing and the activities were really fun. Highly recommend this group travel experience.`
    },
    {
      name: 'John Doe',
      photo: 'assets/images/3.jpg',
      rating: 3,
      reviewText: `The trip was good, but I felt some activities were rushed. Still, had a decent time with the group.`
    }
  ];

  
  scrollPosition = 0;
  itemWidth = 310; // Adjust based on your design

  scrollNext() {
    const container = document.querySelector('.item-container') as HTMLElement;
    if (this.scrollPosition < container.scrollWidth - container.clientWidth) {
      this.scrollPosition += this.itemWidth;
      container.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
    }
  }

  scrollPrev() {
    const container = document.querySelector('.item-container') as HTMLElement;
    if (this.scrollPosition > 0) {
      this.scrollPosition -= this.itemWidth;
      container.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
    }
  }
  
  


  cards1 = [
    {
      date: 'July 15, 2022',
      image: 'assets/images/6.jpg',
      alt: 'National Capitol of Cuba',
      title: 'Summer Holidays To The oxolotan River',
      commentsCount: 0,
      author: 'User'
    },
    {
      date: 'July 15, 2022',
      image: 'assets/images/7.jpg',
      alt: 'National Capitol of Cuba',
      title: 'Summer Holidays To The oxolotan River',
      commentsCount: 0,
      author: 'User'
    },
    {
      date: 'July 15, 2022',
      image: 'assets/images/8.jpg',
      alt: 'National Capitol of Cuba',
      title: 'Summer Holidays To The oxolotan River',
      commentsCount: 0,
      author: 'User'
    }
  ];

 

}
