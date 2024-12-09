import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { Package } from '../model/OlftInterface';
/*
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

*/


@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [NgFor,NgxPaginationModule,CommonModule],
  templateUrl:'./tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent implements OnInit {

  @Output() pageChange = new EventEmitter<number>();
  @Input() activePage: number = 1; // Current active page

totalLength:any;
totalPages:number=0;
itemsPerPage:number=3;
page:number=1;

  _packages:Package[] = []

  constructor(private _service:ServiceService ,private router:Router) { }

  ngOnInit(): void {

    this._service.getPackages().subscribe((result)=>{
        this._packages = result;
        this.totalLength=result.length;
        this.totalPages = Math.ceil(this.totalLength / this.itemsPerPage); // Calculate total pages
        console.log(this._packages)
      });
    
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


/*
getPackages(): Package[] {
  const startIndex = (this.activePage - 1) * this.itemsPerPage;
  return this._packages.slice(startIndex, startIndex + this.itemsPerPage);
} 

pageChanged(event: number) {
  this.activePage = event;
  console.log('Page changed to:', this.activePage); // Debugging line
  this.pageChange.emit(this.activePage);
}
*/

setPage(page: number): void {
  if (page !== this.activePage) {
    this.activePage = page;
    this.pageChange.emit(this.activePage); // Emit page change event
  }
}

// Get the list of visible pages (1, 2, 3, etc.)

get visiblePages(): number[] {
    const pages = [];
    
    // Show the first 3 pages if total pages are >= 3, else show all pages
    if (this.totalPages <= 3) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If activePage is 1 or 2, show first 3 pages
      if (this.activePage <= 2) {
        pages.push(1, 2, 3);
      } else if (this.activePage >= this.totalPages - 1) {
        // If activePage is near the last pages, show the last 3 pages
        pages.push(this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        // Else show 3 pages around the active page
        pages.push(this.activePage - 1, this.activePage, this.activePage + 1);
      }
    }
  
    return pages;
  }


// Handle next page click
nextPage(): void {
  if (this.activePage < this.totalPages) {
    this.setPage(this.activePage + 1);
  }
}

// Handle previous page click
previousPage(): void {
  if (this.activePage > 1) {
    this.setPage(this.activePage - 1);
  }
}
}
