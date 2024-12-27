import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar'
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
import { ReactiveFormsModule } from '@angular/forms';
import { PackageDetailPageComponent } from './pages/package-detail-page/package-detail-page.component';
import { BlogeDetailPageComponent } from './pages/bloge-detail-page/bloge-detail-page.component';
import { DestinationDetailPageComponent } from './pages/destination-detail-page/destination-detail-page.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


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
    FooterComponent,
    PackageDetailPageComponent,
    BlogeDetailPageComponent,
    DestinationDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule ,
    CommonModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),MasterService,HttpClient,provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
