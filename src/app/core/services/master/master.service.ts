import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Destination, DestinationDetails, DestinationResponse, GalleryResponse, ItineraryResponse, Package, PackageResponse, PopularPackagesResponseCountry } from '../../models/interfaces/OlftInterface';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl = 'http://localhost:8000/api/';   // Replace with your API endpoint.

  constructor(private http:HttpClient){}
   
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
     map((response: PackageResponse) => response.data));}

getTourGuides(): Observable<any[]>
 {
   return this.http.get<any[]>(this.apiUrl+'tourguide_data');
 }

 getDestinationsDetails(country:string): Observable<DestinationDetails[]> {
 return this.http.get<DestinationResponse>(`${this.apiUrl + 'destinations'}/country/${country}`)
   .pipe(map((response: DestinationResponse) => response.data));
   }

     getDestinations(): Observable<Destination[]> {
return this.http.get<{ success: boolean; data: Destination[] }>(`${this.apiUrl}destinations/show`)
.pipe(map(response => response.data) );
     }

     //localhost:8000/api/packages/country/india  http://localhost:8000/api/packages/country/india

getPackagesCountry(country:string):Observable<PopularPackagesResponseCountry>
{
 return this.http.get<PopularPackagesResponseCountry>(`${this.apiUrl+'packages'}/country/${country}`);
}


//getGallery(id:number):Observable<GalleryResponse[]>
//{
 //return this.http.get<Gallery[]>(`${this.apiUrl+ 'galleries'}/package/${packageId}`);
//}
 
getGallery(id: number): Observable<GalleryResponse> {
 return this.http.get<GalleryResponse>(`${this.apiUrl+'galleries'}/package/${id}`).pipe(tap(()=> console.log("itinaries called"))) ;
}


getItineraries(id:number):Observable<ItineraryResponse>{
 http://localhost:8000/api/itineraries/package/35
  return this.http.get<ItineraryResponse>(`${this.apiUrl+'itineraries'}/package/${id}`).pipe(tap(()=> console.log("itinaries called"))) ;

// return this.http.get<Itinerary[]>(`${this.apiUrl}itineraries/package/${id}`).pipe(tap(()=> console.log("itinaries called"))) ;
}

getFooter():Observable<any>
{
 return this.http.get<any>(`${this.apiUrl+'footer'}`)
}
//localhost:8000/api/client_queries/store //'/client_queries/store'

getFormData(data:any):Observable<any> {
 return this.http.post<any>(`${this.apiUrl}client_queries/store`,data)
}

  
}
