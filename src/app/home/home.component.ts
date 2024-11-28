import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { filter } from 'rxjs';

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

export interface TourGuide {
  id: number;
  captain: string;
  image: string;
  created_at: string; // Consider using Date if you want to handle date objects
  updated_at: string; // Consider using Date if you want to handle date objects
  insta: string;
  phn_number: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  providers:[ServiceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  _packages:Package[] = []
  _tourguides:TourGuide[] =[]


  formatDaysAndNights(days: any): string {
    if (days < 1) {
      return '0 days 0 nights';
    }
    
    const nights = days > 1 ? days - 1 : 0; // Calculate nights based on days
    return `${nights} nights ${days} days`;
  }

  constructor(private _service:ServiceService) { }
  
  ngOnInit(): void {

    this._service.getPackages().subscribe({
      next:(data)=>{

        this._packages = data;
        console.log(data)
      },
      error:(err)=>{
        console.log(err)

      }
    }),

    this._service.getTourGuides().subscribe({
      next:(data)=>{

        this._tourguides = data.slice(0,3);
         
        console.log(data)
      },

      error:(err)=>{
        console.log(err)

      }
    });
  }





/*data for cards*/

  tourGuides = [
    {
      name: 'Lincoln Anthony',
      role: 'Tour Guide',
      photo: '/assets/images/i.jpg',
      socialMedia: {
        instagram: 'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
        whatsapp: 'https://www.whatsapp.com',
        twitter: 'https://www.twitter.com'
      }
    },
    {
      name: 'Theodore Aiden',
      role: 'Tour Guide',
      photo: '/assets/images/a.jpg',
      socialMedia: {
        instagram: 'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
        whatsapp: 'https://www.whatsapp.com',
        twitter: 'https://www.twitter.com'
      }
    },
    {
      name: 'Sebastian Mateo',
      role: 'Tour Guide',
      photo: '/assets/images/g.jpg',
      socialMedia: {
        instagram: 'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
        whatsapp: 'https://www.whatsapp.com',
        twitter: 'https://www.twitter.com'
      }
    }
  ];


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

  tours = [
    { tourName: 'Paris', placeRank: '3rd Place', imagePath: 'assets/images/a.jpg' },
    { tourName: 'Italy', placeRank: '2nd Place', imagePath: 'assets/images/b.jpg' },
    { tourName: 'Tokyo', placeRank: '1st Place', imagePath: 'assets/images/c.jpg' },
    { tourName: 'Paris', placeRank: '3rd Place', imagePath: 'assets/images/a.jpg' },
    { tourName: 'Italy', placeRank: '2nd Place', imagePath: 'assets/images/b.jpg' },
    { tourName: 'Tokyo', placeRank: '1st Place', imagePath: 'assets/images/c.jpg' },
    { tourName: 'Paris', placeRank: '3rd Place', imagePath: 'assets/images/a.jpg' },
    { tourName: 'Italy', placeRank: '2nd Place', imagePath: 'assets/images/b.jpg' },
    { tourName: 'Tokyo', placeRank: '1st Place', imagePath: 'assets/images/c.jpg' }
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
  
  cards = [
    {
      title: 'Vineas Valley',
      imageUrl: 'assets/images/a.jpg',
      altText: 'Franz Josef Glacier',
      duration: '3 Days 4 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    },
    {
      title: 'Milford Sound Piopiotahi',
      imageUrl: 'assets/images/4.jpg',
      altText: 'Milford Sound',
      duration: '5 Days 6 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    },
    {
      title: 'Great Barrier Adventure',
      imageUrl: 'assets/images/5.jpg',
      altText: 'Great Barrier Reef',
      duration: '4 Days 3 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    },
    {
      title: 'Great Barrier Adventure',
      imageUrl: 'assets/images/6.jpg',
      altText: 'Great Barrier Reef',
      duration: '4 Days 3 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    },
    {
      title: 'Great Barrier Adventure',
      imageUrl: 'assets/images/7.jpg',
      altText: 'Great Barrier Reef',
      duration: '4 Days 3 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    },
    {
      title: 'Great Barrier Adventure',
      imageUrl: 'assets/images/8.jpg',
      altText: 'Great Barrier Reef',
      duration: '4 Days 3 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    },
    {
      title: 'Great Barrier  Adventure',
      imageUrl: 'assets/images/9.jpg',
      altText: 'Great Barrier Reef',
      duration: '4 Days 3 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    },
    {
      title: 'Great Barrier Adventure',
      imageUrl: 'assets/images/10.jpg',
      altText: 'Great Barrier Reef',
      duration: '4 Days 3 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    },
    {
      title: 'Great Barrier Adventure',
      imageUrl: 'assets/images/11.jpg',
      altText: 'Great Barrier Reef',
      duration: '4 Days 3 Nights',
      link: 'package',
      startingFrom: 'Starting From',
      perPerson: 'Per Person'
    }
  ];
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

