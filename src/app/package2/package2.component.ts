import { Component } from '@angular/core';

@Component({
  selector: 'app-package2',
  standalone: true,
  imports: [],
  templateUrl: './package2.component.html',
  styleUrl: './package2.component.css'
})
export class Package2Component {

  tourDetails = {
    duration: '3 Days 4 Night',
    tourType: 'Hill Town',
    groupSize: '10 People',
    tourGuide: '3 Mentors',
    location: 'Cuba',
    imagePath: 'assets/images/11.jpg'
  };

  /*
  _packages:Package[] = []
  _tourguides:TourGuide[] =[]


  formatDaysAndNights(days: any): string {
    if (days < 1) {
      return '0 days 0 nights';
    }
    
    const nights = days > 1 ? days - 1 : 0; // Calculate nights based on days
    return `${nights} nights ${days} days`;
  }

  constructor(private _service:ServiceService,
    private router:Router) { }
  
  ngOnInit(): void {

    this._service.getPackages().subscribe({
      next:(data)=>{

        this._packages = data;
        console.log(data)
      },
      error:(err)=>{
        console.log(err)

      }
    }),*/

}
