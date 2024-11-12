import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {

  constructor(private router:Router) { }
  goToNextPage() {
    this.router.navigate(['/page1']);
  }
}