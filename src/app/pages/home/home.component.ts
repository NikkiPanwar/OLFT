import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  scrollNext() {
    const card = document.getElementById('card') as HTMLElement;

    const container = document.querySelector('.cont1') as HTMLElement;
    if (this.scrollPosition < container.scrollWidth - container.clientWidth) {
      this.scrollPosition += container.clientWidth; // Adjust this value based on your design
      container.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
    }
  }
  
  scrollPrev() {
    const container = document.querySelector('.cont1') as HTMLElement;
    if (this.scrollPosition > 0) {
      this.scrollPosition -= container.clientWidth; // Adjust this value based on your design
      container.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
    }  } 


    goToDestinationDetailPage(country:string): void {
      this.router.navigate(['/destinationDetailPage', country]); 
    }
  }


