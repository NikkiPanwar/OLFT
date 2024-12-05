import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Package } from './home/home.component';
import { Gallery, Itinerary } from './package/package.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:8000/api/';   // Replace with your API endpoint.
  private apipackage = 'http://localhost:8000/api/package/'; 
  constructor(private http: HttpClient) {}
  getPackages(): Observable<Package[]>
   {
    return this.http.get<Package[]>(this.apiUrl+'packages');
    
  }

  getPackage(id: number): Observable<Package> {
    // Correctly concatenate the id using template literals
    return this.http.get<Package>(`${this.apipackage}${id}`); // Use the correct URL and format
  }

  getTourGuides(): Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl+'tourguides');
  }

getDestination():Observable<any[]>
{

  return this.http.get<any[]>(this.apiUrl+'destination');
}

getGallery():Observable<Gallery[]>
{
  return this.http.get<Gallery[]>(this.apiUrl+'galleries');
}

getItineraries():Observable<Itinerary[]>
{
return this.http.get<Itinerary[]>(this.apiUrl+'itineraries')
}


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