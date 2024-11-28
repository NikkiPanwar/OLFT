import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor() { }
  
  ngOnInit(): void {}


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
