import { Component, OnInit } from '@angular/core';
import { DestinationDetails, PackageCountry } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination-detail-page',
  templateUrl: './destination-detail-page.component.html',
  styleUrl: './destination-detail-page.component.css'
})
export class DestinationDetailPageComponent implements OnInit{

  _topCountry:PackageCountry[]= [];
  _destinationsDetails:DestinationDetails[]=[];
  country:string='';

constructor(private _service :MasterService ,private route:ActivatedRoute,private router:Router ) {

 this.route.params.subscribe(params => {
   this.country = params['country'];  
    console.log('Country:', this.country);
     } );
}
     
     ngOnInit(): void {
     this.getDestinationDetail();
     this. getPackageAccordingToCountry();
    }


    getPackageAccordingToCountry(){

      this._service.getPackagesCountry(this.country).subscribe({
        next:(response)=>{
          if(response.success){
          this._topCountry = response.data.slice(0,4);
          console.log("popular packages", this._topCountry);
        }
      },
        error:(err)=>{
          console.log(err)
        }
      });
}

getDestinationDetail()
{
  this._service.getDestinationsDetails(this.country).subscribe({
    next:(data)=>{

      if(data && data.length>0){
        this._destinationsDetails = data;
console.log("destinationdetails" , this._destinationsDetails);
    }
    else {
      console.log('No data found for country:', this.country);
    }
  },
    error:(err)=>{
      console.log(err)
      console.log('Fetching destination details for country:', this.country);
    }
  });
}

bookNow(packageId: number) {
  this.router.navigate(['/packageDetailPage', packageId]);
}


formatDaysAndNights(days: any): string {
  if (days < 1) {
    return '0 days 0 nights';
  }
  const nights = days > 1 ? days - 1 : 0; 
  return `${nights} nights ${days} days`;
}
}
