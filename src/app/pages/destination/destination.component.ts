import { Component, OnInit } from '@angular/core';
import { Destination } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent{

//   _destinations:Destination[]=[];

//   constructor(private _service : MasterService ,private router:Router){}

// ngOnInit(): void {
  

//   this.destination()
// }

// destination()
// {
//   this._service.getDestinations().subscribe({
//     next:(data)=>{
//         this._destinations = data;
//       console.log("destinations called", this._destinations);
//     },
//     error:(err)=>{
//       console.log(err)}
//   });
// }
// }



cards = [
  {
   image: 'assets/images/2.jpg',
country: 'User',
place:'india'
  },

  {
    image: 'assets/images/2.jpg',
 country: 'User',
 place:'india'
   },
   {
    image: 'assets/images/2.jpg',
 country: 'User',
 place:'india'
   },
   
   {
    image: 'assets/images/2.jpg',
 country: 'User',
 place:'india'
   },
   {
    image: 'assets/images/2.jpg',
 country: 'User',
 place:'india'
   },
   {
    image: 'assets/images/2.jpg',
 country: 'User',
 place:'india'
   },
   {
    image: 'assets/images/2.jpg',
 country: 'User',
 place:'india'
   },
 {
  image: 'assets/images/2.jpg',
  country: 'User',
  place:'india'
 },
   {
    image: 'assets/images/2.jpg',
 country: 'User',
 place:'india'
   }
]
}
