import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { TourComponent } from './tour/tour.component';
import { DestinationComponent } from './destination/destination.component';

export const routes: Routes = [

{path :"",component:HomeComponent},
{path :"about",component:AboutComponent},
{path :"blogs",component:BlogsComponent},
{path :"contact",component:ContactComponent},
{path :"tour",component:TourComponent},
{path :"destination", component:DestinationComponent}
];
