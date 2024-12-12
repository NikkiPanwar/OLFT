import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { ContactComponent } from '../contact/contact.component';
import { DestinationComponent } from '../destination/destination.component';
import { PackageComponent } from '../package/package.component';
import { TourComponent } from '../tour/tour.component';
import { Page2Component } from '../page2/page2.component';
import { Package2Component } from '../package2/package2.component';
import {  HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { provideClientHydration } from '@angular/platform-browser';

export const routes: Routes = [

  {path :"",component:HomeComponent},
  {path :"about",component:AboutComponent},
  {path :"blogs",component:BlogsComponent},
  {path :"contact",component:ContactComponent},
  {path :"destination", component:DestinationComponent},
  {path:"package", component:PackageComponent},
  { path: 'package/:id', component: PackageComponent },
  {path :"tour",component:TourComponent},
  {path:"page2",component:Page2Component},
  {path:"package2",component:Package2Component},
  {path:'blogDetails',component:BlogDetailsComponent}
  ]


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),  // Use forRoot() to configure routes for the entire application
    CommonModule , NgxPaginationModule,HttpClientModule,
  ],
  providers: [provideClientHydration()],
    
exports:[RouterModule]
})
export class AppRoutingModule { }
