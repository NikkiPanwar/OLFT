import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Destination, DestinationDetails, DestinationResponse, GalleryResponse, ItineraryResponse, Package, PackageResponse, PopularPackagesResponseCountry } from '../../models/interfaces/OlftInterface';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl = 'http://localhost:8000/api/';   // Replace with your API endpoint.

  constructor(private http: HttpClient) { }

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(this.apiUrl + 'packages');
  }



  getPackage(id: number): Observable<Package> {
    return this.http.get<PackageResponse>(`${this.apiUrl + 'package/'}${id}`).pipe(
      map((response: PackageResponse) => response.data));
  }


  
  getTourGuides(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'tourguide_data');
  }




}
