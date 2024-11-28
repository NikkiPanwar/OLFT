import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  constructor(private router:Router) { }
  goToPreviousPage() {
    this.router.navigate(['/tour']);
  }

  // Navigate to the next page (Tour page)
  goToNextPage() {
    this.router.navigate(['/page2']);
  }

  cards = [
    {
duration: '3 Days 4 Nights',
      imageUrl: 'assets/images/4.jpg',
      altText: 'National Capitol of Cuba',
      title: 'Milford Sound Piopiotahi',
      link: '#',
      startingFrom: 'Starting From'
    },
    {
      duration: '3 Days 4 Nights',
     imageUrl: 'assets/images/5.jpg',
    altText: 'National Capitol of Cuba',
    title: 'Milford Sound Piopiotahi',
  link: '#',
   startingFrom: 'Starting From'
 },
 {
  duration: '3 Days 4 Nights',
 imageUrl: 'assets/images/6.jpg',
altText: 'National Capitol of Cuba',
title: 'Milford Sound Piopiotahi',
link: '#',
startingFrom: 'Starting From'
},
{
  duration: '3 Days 4 Nights',
 imageUrl: 'assets/images/7.jpg',
altText: 'National Capitol of Cuba',
title: 'Milford Sound Piopiotahi',
link: '#',
startingFrom: 'Starting From'
},
{
  duration: '3 Days 4 Nights',
 imageUrl: 'assets/images/8.jpg',
altText: 'National Capitol of Cuba',
title: 'Milford Sound Piopiotahi',
link: '#',
startingFrom: 'Starting From'
},
{
  duration: '3 Days 4 Nights',
 imageUrl: 'assets/images/9.jpg',
altText: 'National Capitol of Cuba',
title: 'Milford Sound Piopiotahi',
link: '#',
startingFrom: 'Starting From'
},
{
  duration: '3 Days 4 Nights',
 imageUrl: 'assets/images/10.jpg',
altText: 'National Capitol of Cuba',
title: 'Milford Sound Piopiotahi',
link: '#',
startingFrom: 'Starting From'
},
{
  duration: '3 Days 4 Nights',
 imageUrl: 'assets/images/11.jpg',
altText: 'National Capitol of Cuba',
title: 'Milford Sound Piopiotahi',
link: '#',
startingFrom: 'Starting From'
},
{
  duration: '3 Days 4 Nights',
 imageUrl: 'assets/images/3.jpg',
altText: 'National Capitol of Cuba',
title: 'Milford Sound Piopiotahi',
link: '#',
startingFrom: 'Starting From'
}
];
}