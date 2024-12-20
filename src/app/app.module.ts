import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { TourComponent } from './pages/tour/tour.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MasterService } from './core/services/master/master.service';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DestinationComponent,
    TourComponent,
    BlogsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    provideClientHydration(),MasterService,HttpClient,provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
