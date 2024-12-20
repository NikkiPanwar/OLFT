import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Package } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {

  
  @Output() pageChange = new EventEmitter<number>();
  @Input() activePage: number = 1; // Current active page

totalLength:any;
totalPages:number=0;
itemsPerPage:number=5;
page:number=1;

  _packages:Package[] = []

  constructor(private _service:MasterService ,private router:Router) { }


  ngOnInit(): void {

    this._service.getPackages().subscribe((result) => {
      this._packages = result;
      this.totalLength = result.length;
      this.totalPages = Math.ceil(this.totalLength / this.itemsPerPage); // Calculate total pages
      console.log(this._packages);
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