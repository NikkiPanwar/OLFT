import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  constructor(private router:Router) { }
  goToPreviousPage() {
    this.router.navigate(['/tour']);
  }

  // Navigate to the next page (Tour page)
  goToNextPage() {
    this.router.navigate(['/page2']);
  }
}