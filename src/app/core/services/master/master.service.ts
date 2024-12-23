import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Blog, BlogResponse, Destination, DestinationDetails, DestinationResponse, GalleryResponse, ItineraryResponse, Package, PackageResponse, PopularPackagesResponseCountry } from '../../models/interfaces/OlftInterface';
import { BlogsComponent } from '../../../pages/blogs/blogs.component';

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


getBlogs():Observable<BlogResponse>{
  return this.http.get<BlogResponse>(this.apiUrl+ 'blogs_details');
}


getDestinations(): Observable<Destination[]> {
  return this.http.get<{ success: boolean; data: Destination[] }>(`${this.apiUrl}destinations/show`)
  .pipe(map(response => response.data) );
        }
}
