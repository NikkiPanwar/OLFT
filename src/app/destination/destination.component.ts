import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgFor } from '@angular/common';



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




@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NgFor],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit {

_destination:Package[] = []

constructor(private _service:ServiceService){}
ngOnInit(): void {
  
  this._service.getDestination().subscribe({
    next:(data)=>{

      this._destination= data;
      console.log(data)
    },

    error:(err)=>{
      console.log(err) }
  })

}

destinations = [
  {
    name: 'Paris',
    link: 'https://olft.in/destination/paris/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/paris-1.png',
    placeCount: 3
  },
  {
    name: 'New Zeland',
    link: 'https://olft.in/destination/newzeland/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Newzeland-1.png',
    placeCount: 3
  },
  {
    name: 'India',
    link: 'https://olft.in/destination/india/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/shan-elahi-DDiLYt_F88w-unsplash-1-1-1.jpg',
    placeCount: 3
  },
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
  
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
  {
    name: 'Grand Canyon',
    link: 'https://olft.in/destination/grand-canyon/',
    image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2023/08/Grand-Canyon.png',
    placeCount: 1
  },
];

}
