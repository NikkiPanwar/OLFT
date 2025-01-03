import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map, Observable, tap } from 'rxjs';
import { Blog, BlogResponse, ClientQuery, Destination, DestinationDetails, DestinationResponse, GalleryResponse, ItineraryResponse, Package, PackageResponse, PopularPackagesResponseCountry, TourGuide } from '../../models/interfaces/OlftInterface';
import { MatSnackBar} from '@angular/material/snack-bar'
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl = 'http://13.233.73.166/api/';   // Replace with your API endpoint.

  constructor(private http: HttpClient, private _snackbar: MatSnackBar ) { }

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(this.apiUrl + 'packages');//
  }

  getPackage(id: number): Observable<Package> {
    return this.http.get<PackageResponse>(`${this.apiUrl + 'packages/'}${id}`).pipe(//
      map((response: PackageResponse) => response.data));
  }
  
  getTourGuides(): Observable<TourGuide[]> {
    return this.http.get<TourGuide[]>(this.apiUrl + 'tourguide-data');
  }


getBlogs():Observable<BlogResponse>{
  return this.http.get<BlogResponse>(this.apiUrl+ 'blogs');
}

getBlogDetails(id: number): Observable<Blog> {
  return this.http.get<Blog>(`${this.apiUrl+'blogs/'}${id}`);
}

getDestinations(): Observable<Destination[]> {
  return this.http.get<{ success: boolean; data: Destination[] }>(`${this.apiUrl}destinations/show`)
  .pipe(map(response => response.data) );
}

getDestinationsDetails(country:string): Observable<DestinationDetails[]> {
  return this.http.get<DestinationResponse>(`${this.apiUrl + 'destinations'}/country/${country}`)
    .pipe(map((response: DestinationResponse) => response.data));
    }

getPackagesCountry(country:string):Observable<PopularPackagesResponseCountry>{
  return this.http.get<PopularPackagesResponseCountry>(`${this.apiUrl+'packages'}/country/${country}`);
}

getItineraries(id:number):Observable<ItineraryResponse>{
 return this.http.get<ItineraryResponse>(`${this.apiUrl+'itineraries'}/${id}`).pipe(tap(()=> console.log("itinaries called"))) ;
}

getGallery(id: number): Observable<GalleryResponse> {
  return this.http.get<GalleryResponse>(`${this.apiUrl + 'galleries/'}${id}`).pipe(tap(()=> console.log("itinaries called"))) ;
 }

 postFormData(data:ClientQuery):Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  return this.http.post<any>(`${this.apiUrl}client_queries/store`,data,{headers:headers}).pipe(finalize(()=> {this._snackbar.open("Enquiry has been sent", "Close", {
    duration: 3000, 
    horizontalPosition: 'center', // Optional: 'start' | 'center' | 'end' | 'left' | 'right'
    verticalPosition: 'top', // Optional: 'top' | 'bottom'
  });}))
}

}
