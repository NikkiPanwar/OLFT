import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Package } from './home/home.component';
import { galleries } from './package/package.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:8000/api/';   // Replace with your API endpoint.
  
  constructor(private http: HttpClient) {}
  getPackages(): Observable<Package[]>
   {
    return this.http.get<Package[]>(this.apiUrl+'packages');
    
  }

  getTourGuides(): Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl+'tourguides');
  }
  
getGallery():Observable<galleries[]>
{
  return this.http.get<galleries[]>(this.apiUrl+'Gallery');
}
/*
getItineraries():Observable<any[]>
{
return this.http.get<any[]>(this.apiUrl+'itineraries')
}*/
}

// @Injectable({
//   providedIn:'root'
// })
// export class PackageService {
//   private apiUrl = 'http://localhost:8000/api/packages';
//   constructor(private http: HttpClient) {}
//   getPackages(): Observable<object> {
//     return this.http.get(this.apiUrl);
//   }
// }



