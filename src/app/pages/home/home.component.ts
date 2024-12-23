import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs';
import { Contact, Destination, Package, PackageCountry, TourGuide } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  _packages:Package[] = []
  _tourguides:TourGuide[] =[]

  scrollPosition = 0;
  itemWidth = 310; // Adjust based on your design

  constructor(private _service:MasterService,private router:Router){}

  ngOnInit(): void {
   
    this.tourguide();
    this.packages();
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

  formatDaysAndNights(nights: any): string {
    if (nights < 1) {
      return '0 days 0 nights';
    } 
    const days = nights > 1 ? nights - 1 : 0; // Calculate nights based on days
    return `${days} days ${nights} nights`;
  }

  
  bookNow(packageId: number) {
    // this.router.navigate(['/package', packageId]);
  }

  scrollNext() {
    const container = document.querySelector('.cont1') as HTMLElement;
    if (this.scrollPosition < container.scrollWidth - container.clientWidth) {
      this.scrollPosition += this.itemWidth; // Adjust this value based on your design
      container.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
    }
  }
  
  scrollPrev() {
    const container = document.querySelector('.cont1') as HTMLElement;
    if (this.scrollPosition > 0) {
      this.scrollPosition -= this.itemWidth; // Adjust this value based on your design
      container.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
    }
  } 
  }


