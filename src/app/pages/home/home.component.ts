import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs';
import {  Destination, Package, PackageCountry, TourGuide } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

 
  @Output() pageChange = new EventEmitter<number>();
  @Input() activePage: number = 1; // Current active page
 
  totalLength:any;
  totalPages:number=0;
  itemsPerPage:number=3;
  page:number=1;
  


  private _dataLoaded: boolean = false;

  _packages:Package[] = []
  _tourguides:TourGuide[] =[]
  _destinations:Destination[]=[];
  _topCountry: PackageCountry[] = [];

country:string ='India';

scrollPosition = 0;
  itemWidth = 310; // Adjust based on your design

  constructor(private _service:MasterService,private router:Router , private route:ActivatedRoute){}

  ngOnInit(): void {
   
    this.tourguide();
    this.packages();
    this.destination();
    this.getPackageAccordingToCountry();

    this._service.getPackages().subscribe((result) => {
      this._packages = result;
      this.totalLength = result.length;
      this.totalPages = Math.ceil(this.totalLength / this.itemsPerPage); // Calculate total pages
      console.log(this._packages);
    });
  }

  packages(){
    this._service.getPackages().subscribe({
      next:(data)=>{
        this._packages = data;
        console.log(data)
      }, 
      error:(err)=>{
        console.log(err)}
    });
  }

  tourguide() {
    this._service.getTourGuides().subscribe({
      next: (data) => {
        this._tourguides = data.slice(0, 3);
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  destination(){
    this._service.getDestinations().subscribe({
      next:(data)=>{
          this._destinations = data;
        console.log("destinations called", this._destinations);
      },
      error:(err)=>{
        console.log(err)}
    });
  }
 
getPackageAccordingToCountry(){
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
}

getcountByCountry(country: string): number {
  console.log(country);
if (this._dataLoaded && this._topCountry.length) {
  return (this._topCountry.length);
}

this._service.getPackagesCountry(country).pipe(
  first(), 
  map(response => {
    if (response.success) {
      this._topCountry = response.data; 
      this._dataLoaded = true; 
       this._topCountry.length; 
    }
    return 0; 
  })
).subscribe()

if(this._topCountry.length){
  return this._topCountry.length
}
return this._topCountry.length

}


  formatDaysAndNights(nights: any): string {
    if (nights < 1) {
      return '0 days 0 nights';
    } 
    const days = nights > 1 ? nights - 1 : 0; // Calculate nights based on days
    return `${days} days ${nights} nights`;
  }

  bookNow(packageId: number) {
    this.router.navigate(['/packageDetailPage', packageId]);
  }

  // scrollNext() {
  //   const card = document.getElementById('card') as HTMLElement;

  //   const container = document.querySelector('.cont1') as HTMLElement;
  //   if (this.scrollPosition < container.scrollWidth - container.clientWidth) {
  //     this.scrollPosition += container.clientWidth; // Adjust this value based on your design
  //     container.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
  //   }
  // }
  
  // scrollPrev() {
  //   const container = document.querySelector('.cont1') as HTMLElement;
  //   if (this.scrollPosition > 0) {
  //     this.scrollPosition -= container.clientWidth; // Adjust this value based on your design
  //     container.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
  //   }  } 


    goToDestinationDetailPage(country:string): void {
      this.router.navigate(['/destinationDetailPage', country]); 
    }

    
setPage(page: number): void {
  if (page !== this.activePage) {
    this.activePage = page;
    this.pageChange.emit(this.activePage); 
  }
  }
  
  
  get visiblePages(): number[] {
    const pages = [];
    if (this.totalPages <= 3) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.activePage <= 2) {
        pages.push(1, 2, 3);
      } else if (this.activePage >= this.totalPages - 1) {
        pages.push(this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        pages.push(this.activePage - 1, this.activePage, this.activePage + 1);
      }
    }
  
    return pages;
  }
  
  
  nextPage(): void {
    if (this.activePage < this.totalPages) {
      this.activePage += 1;
    }
  }
  
  previousPage(): void {
    if (this.activePage > 1) {
      this.activePage -= 1;
    }
  }
  
  
  }


