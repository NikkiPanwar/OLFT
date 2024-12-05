import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import {NgxPaginationModule} from 'ngx-pagination';

export interface Package {
  pk_Package_id: number;           // Unique identifier for the package
  title: string;                   // Title of the package
  about: string;                   // Description of the package
  coordinates: string;             // Coordinates of the location
  country: string;                 // Country where the package is located
  created_at: string;              // Creation date (consider using Date type if needed)
  duration: string;                // Duration of the package
  group_size: number;              // Maximum group size
  hasItineraries: boolean;         // Indicates if itineraries are available
  image: string;                   // URL of the package image
  state: string;                   // State where the package is located
  tour_guide: number;              // ID of the associated tour guide
  tour_type: string;               // Type of the tour (e.g., Hill, Beach, etc.)
  travel_with_bus: string;         // Indicates if travel is with a bus (as a string)
  updated_at: string;              // Last updated date (consider using Date type if needed)
}



@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [NgFor,NgxPaginationModule ],
  templateUrl:'./tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent implements OnInit {

  constructor(private _service:ServiceService ,private router:Router) { }

totalLength:any;
totalPages:number=0;
itemsPerPage:number=9;
page:number=1;

  _packages:Package[] = []

  ngOnInit(): void {

    this._service.getPackages().subscribe((result)=>{

        this._packages = result;

        this.totalLength=result.length;
        console.log(this._packages)
      })
    
      }
    
  bookNow(packageId: number) 
  {
    this.router.navigate(['/package', packageId]);
}

formatDaysAndNights(nights: any): string {
  if (nights < 1) {
    return '0 days 0 nights';
  }
  
  const days = nights > 1 ? nights - 1 : 0; // Calculate nights based on days
  return `${days} days ${nights} nights`;
}

 
  }
