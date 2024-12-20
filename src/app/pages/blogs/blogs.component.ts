import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  card1 = {
    user: 'User',
    comments: 1,
    title: 'Hello World!',
    link: 'package'
  };


cards = [
  {
    date: 'July 15, 2022',
    image: 'assets/images/2.jpg',
    user: 'User',
    comments: 0,
    title: 'Summer Holidays To The Oxolotan River',
    link: 'package'
  },
  {
    date: 'August 20, 2023',
    image: 'assets/images/3.jpg',
    user: 'User',
    comments: 0,
    title: 'Exploring the Wonders of New Zealand',
    link: 'package'
  },
  {
    date: 'January 10, 2024',
    image: 'assets/images/4.jpg',
    user: 'User',
    comments: 0,
    title: 'Adventure Awaits: Hiking the Alps',
    link: 'package'
  },
  {
    date: 'January 10, 2024',
    image: 'assets/images/5.jpg',
    user: 'User',
    comments: 0,
    title: 'Adventure Awaits: Hiking the Alps',
    link: 'package'
  },
  {
    date: 'January 10, 2024',
    image: 'assets/images/6.jpg',
    user: 'User',
    comments: 0,
    title: 'Adventure Awaits: Hiking the Alps',
    link: 'package'
  },
  {
    date: 'January 10, 2024',
    image: 'assets/images/7.jpg',
    user: 'User',
    comments: 0,
    title: 'Adventure Awaits: Hiking the Alps',
    link: 'package'
  },
  {
    date: 'January 10, 2024',
    image: 'assets/images/8.jpg',
    user: 'User',
    comments: 0,
    title: 'Adventure Awaits: Hiking the Alps',
    link: 'package'
  }, {
    date: 'January 10, 2024',
    image: 'assets/images/9.jpg',
    user: 'User',
    comments: 0,
    title: 'Adventure Awaits: Hiking the Alps',
    link: 'package'
  }
];

}
