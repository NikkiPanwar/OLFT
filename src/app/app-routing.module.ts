import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TourComponent } from './pages/tour/tour.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PackageDetailPageComponent } from './pages/package-detail-page/package-detail-page.component';
import { BlogeDetailPageComponent } from './pages/bloge-detail-page/bloge-detail-page.component';
import { DestinationDetailPageComponent } from './pages/destination-detail-page/destination-detail-page.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [

  {path:'' ,component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'*',component:HomeComponent },
  {path:'tour', component:TourComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'destination',component:DestinationComponent},
  {path:'contact', component:ContactComponent},
  {path:'packageDetailPage',component:PackageDetailPageComponent},
  { path: 'packageDetailPage/:id', component:PackageDetailPageComponent},
  {path:'blogDetailPage',component:BlogeDetailPageComponent},
  {path:'destinationDetailPage',component:DestinationDetailPageComponent},
  {path:'destinationDetailPage/:country',component:DestinationDetailPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
