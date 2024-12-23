import { Component, Input, OnInit } from '@angular/core';
import { Destination } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit {

  @Input() count: number = 0;

  _destinations:Destination[]=[];

  constructor(private _service: MasterService, private router:Router ){}

  ngOnInit(): void {

    this.destination();
}

  destination ()
  {
    this._service.getDestinations().subscribe({
      next:(data)=>{
          this._destinations = data;
        console.log("destinations called", this._destinations);
      },
      error:(err)=>{
        console.log(err)}
    });
  }

  goToDestination(country:string): void {
    this.router.navigate(['/DestinationDetailPage', country]); 
  }



}