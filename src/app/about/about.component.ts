import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

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
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  providers:[ServiceService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

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
      rating: 5,
      reviewText: `Had a wonderful experience on our Bali trip! The team was amazing and the activities were really fun. Highly recommend this group travel experience.`
    },
    {
      name: 'John Doe',
      photo: 'assets/images/3.jpg',
      rating: 5,
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
  cardData = [
    { imageUrl: 'assets/images/i.jpg', icon: 'e-fab-facebook-f' },
    { imageUrl: 'assets/images/b.jpg', icon: 'e-fab-twitter' },
    { imageUrl: 'assets/images/c.jpg', icon:'e-fab-instagram'},
    { imageUrl: 'assets/images/d.jpg', icon:  'e-fab-linkedin' },
    { imageUrl: 'assets/images/d.jpg', icon: 'e-fab-linkedin' },

  ];

}