import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TourComponent } from './pages/tour/tour.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

  {path:'' ,component:HomeComponent},
  {path:'*',component:HomeComponent },
  // {path:'footer',component:FooterComponent},
  {path:'tour', component:TourComponent},
  {path:'blogs',component:BlogsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  // CommonModule,NgxPaginationModule  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
