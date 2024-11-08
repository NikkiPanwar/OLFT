import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { TourComponent } from './tour/tour.component';
import { DestinationComponent } from './destination/destination.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const routes: Routes = [

{path :"",component:HomeComponent},
{path :"about",component:AboutComponent},
{path :"blogs",component:BlogsComponent},
{path :"contact",component:ContactComponent},
{path :"tour",component:TourComponent},
{path :"destination", component:DestinationComponent},
{path :"page1", component:Page1Component},
{path :"page2", component:Page2Component}

];
