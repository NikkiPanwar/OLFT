import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {

  constructor(private router:Router) { }
  goToNextPage() {
    this.router.navigate(['/page1']);
  }

    cards = [
      {
        duration: '3 Days 4 Nights',
        imageUrl: 'assets/images/3.jpg',
        altText: 'National Capitol of Cuba',
        title: 'Milford Sound Piopiotahi',
        link: '#',
        startingFrom: 'Starting From'
      },
      {
        duration: '4 Days 3 Nights',
        imageUrl: 'assets/images/4.jpg',
        altText: 'Great Barrier Reef',
        title: 'Great Barrier Adventure',
        link: '#',
        startingFrom: 'Starting From'
      },
      {
        duration: '5 Days 6 Nights',
        imageUrl: 'assets/images/5.jpg',
        altText: 'Sydney Opera House',
        title: 'Sydney Opera House ',
        link: '#',
        startingFrom: 'Starting From'
      },
      {
        duration: '5 Days 6 Nights',
        imageUrl: 'assets/images/6.jpg',
        altText: 'Sydney Opera House',
        title: 'Sydney Opera House ',
        link: '#',
        startingFrom: 'Starting From'
      },
      {
        duration: '5 Days 6 Nights',
        imageUrl: 'assets/images/7.jpg',
        altText: 'Sydney Opera House',
        title: 'Sydney Opera House',
        link: '#',
        startingFrom: 'Starting From'
      },
      {
        duration: '5 Days 6 Nights',
        imageUrl: 'assets/images/8.jpg',
        altText: 'Sydney Opera House',
        title: 'Sydney Opera House',
        link: '#',
        startingFrom: 'Starting From'
      },
      {
        duration: '5 Days 6 Nights',
        imageUrl: 'assets/images/9.jpg',
        altText: 'Sydney Opera House',
        title: 'Sydney Opera House',
        link: '#',
        startingFrom: 'Starting From'
      },
      {
        duration: '5 Days 6 Nights',
        imageUrl: 'assets/images/10.jpg',
        altText: 'Sydney Opera House',
        title: 'Sydney Opera House',
        link: '#',
        startingFrom: 'Starting From'
      },
      {
        duration: '5 Days 6 Nights',
        imageUrl: 'assets/images/11.jpg',
        altText: 'Sydney Opera House',
        title: 'Sydney Opera House',
        link: '#',
        startingFrom: 'Starting From'
      }
    ];
}