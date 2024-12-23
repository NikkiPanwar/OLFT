import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TourComponent } from './pages/tour/tour.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DestinationComponent } from './pages/destination/destination.component';
const routes: Routes = [

  {path:'' ,component:HomeComponent},
  {path:'*',component:HomeComponent },
  {path:'tour', component:TourComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'destination',component:DestinationComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  // CommonModule,NgxPaginationModule  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
