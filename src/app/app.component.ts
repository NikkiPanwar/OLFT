/*import { NgFor, NgIf } from '@angular/common';*/
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterModule,HttpClientModule],
  providers:[ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None // Disable encapsulation

})
export class AppComponent {
  title = 'OLFT';
  imagePath: string = 'assets/images/e.jpg'; // Ensure path is correct

}
