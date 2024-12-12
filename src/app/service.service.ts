import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap} from 'rxjs';
import { GalleryResponse, ItineraryResponse, Package } from './model/OlftInterface';
import { PackageResponse } from './model/OlftInterface';


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
    // return this.http.get<Package>(`${this.apipackage}${id}`).pipe(map(data:(PackageResponse: any) => data.data)) ; // Use the correct URL and format
    // return this.http.get<PackageResponse>(`${this.apipackage}${id}`).pipe(
    //   map((response: PackageResponse) => response.data)
    // );
    return this.http.get<PackageResponse>(`${this.apiUrl + 'package/'}${id}`).pipe(
      map((response: PackageResponse) => response.data)
    );
  }

getTourGuides(): Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl+'tourguide_data');
  }

getDestination():Observable<any[]>
{
return this.http.get<any[]>(this.apiUrl+'destination');
}

//getGallery(id:number):Observable<GalleryResponse[]>
//{
  //return this.http.get<Gallery[]>(`${this.apiUrl+ 'galleries'}/package/${packageId}`);
//}
  
getGallery(id: number): Observable<GalleryResponse> {
  return this.http.get<GalleryResponse>(`${this.apiUrl + 'galleries'}/package/${id}`).pipe(tap(()=> console.log("itinaries called"))) ;
 
}


getItineraries(id:number):Observable<ItineraryResponse>{

  http://localhost:8000/api/itineraries/package/35
   return this.http.get<ItineraryResponse>(`${this.apiUrl+'itineraries'}/package/${id}`).pipe(tap(()=> console.log("itinaries called"))) ;
 
 // return this.http.get<Itinerary[]>(`${this.apiUrl}itineraries/package/${id}`).pipe(tap(()=> console.log("itinaries called"))) ;

}



}

function data(this: (PackageResponse: any) => any, value: Package, index: number): Package {
  throw new Error('Function not implemented.');
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