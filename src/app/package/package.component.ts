import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


export interface galleries
{
  pk_Package_id:number; 
    image_url:string;
}

/*
export interface itineraries 
{
  package_id:number;
    days:number;
    title:string;
    description:string;
    image:string;
}*/

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [],
  providers:[ServiceService],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent implements OnInit {
  
  _gallery:galleries[]=[];
  _itineraries :any[]=[];

constructor(private _service:ServiceService){}

ngOnInit(): void {
  
  this._service.getGallery().subscribe({
    next:(data)=>{

      this._gallery= data;
      console.log(data)
    },
    error:(err)=>{
      console.log(err)
    }
  });

  /*
this._service.getItineraries ().subscribe({
  next:(data)=>{

    this._itineraries = data;
    console.log(data)
  },

  error:(err)=>{
    console.log(err)
  }
});*/

}
  
  
  
  
  
  
  
  cards = [
    {
      title: "Milford Sound Piopiotahi",
      duration: "3 Days 4 Nights",
      image: "assets/images/1.jpg",
      alt: "National Capitol of Cuba",
      startingPrice: "Starting From"
    },
    {
      title: "Fiordland National Park",
      duration: "4 Days 5 Nights",
      image: "assets/images/2.jpg",
      alt: "Fiordland National Park",
      startingPrice: "Starting From"
    },
    {
      title: "Lake Tekapo",
      duration: "2 Days 3 Nights",
      image: "assets/images/9.jpg",
      alt: "Lake Tekapo",
      startingPrice: "Starting From"
    },
    {
      title: "Lake Tekapo",
      duration: "2 Days 3 Nights",
      image: "assets/images/8.jpg",
      alt: "Lake Tekapo",
      startingPrice: "Starting From"
    },
    {
      title: "Lake Tekapo",
      duration: "2 Days 3 Nights",
      image: "assets/images/7.jpg",
      alt: "Lake Tekapo",
      startingPrice: "Starting From"
    }
    ,{
      title: "Lake Tekapo",
      duration: "2 Days 3 Nights",
      image: "assets/images/6.jpg",
      alt: "Lake Tekapo",
      startingPrice: "Starting From"
    },
    {
      title: "Lake Tekapo",
      duration: "2 Days 3 Nights",
      image: "assets/images/5.jpg",
      alt: "Lake Tekapo",
      startingPrice: "Starting From"
    },
    {
      title: "Lake Tekapo",
      duration: "2 Days 3 Nights",
      image: "assets/images/4.jpg",
      alt: "Lake Tekapo",
      startingPrice: "Starting From"
    },
    {
      title: "Lake Tekapo",
      duration: "2 Days 3 Nights",
      image: "assets/images/3.jpg",
      alt: "Lake Tekapo",
      startingPrice: "Starting From"
    }
  ];
}
