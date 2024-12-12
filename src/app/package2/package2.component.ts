import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Package } from '../model/OlftInterface';


@Component({
  selector: 'app-package2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './package2.component.html',
  styleUrl: './package2.component.css'
})

export class Package2Component implements OnInit{

  _packages:Package[] = [];


  constructor(private _service :ServiceService, private router:Router ) { }
  
  ngOnInit(): void {

    this._service.getPackages().subscribe({
      next:(data)=>{

        this._packages = data.slice(0,4);
        console.log(data)
      },
      error:(err)=>{
        console.log(err)

      }
    });
  }

  formatDaysAndNights(days: any): string {
    if (days < 1) {
      return '0 days 0 nights';
    }
    
    const nights = days > 1 ? days - 1 : 0; // Calculate nights based on days
    return `${nights} nights ${days} days`;
  }

}

/*
cards = [
  {
    image: 'assets/images/6.jpg',
    alt: 'National Capitol of Cuba',
    title: 'Summer Holidays To The oxolotan River',
  },

  {
    image: 'assets/images/7.jpg',
    alt: 'National Capitol of Cuba',
    title: 'Summer Holidays To The oxolotan River',
  },
  {
    image: 'assets/images/8.jpg',
    alt: 'National Capitol of Cuba',
    title: 'Summer Holidays To The oxolotan River',
  },


]*/
