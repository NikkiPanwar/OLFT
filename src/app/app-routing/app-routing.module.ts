import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),  // Use forRoot() to configure routes for the entire application
    CommonModule  ],
exports:[RouterModule]
})
export class AppRoutingModule { }
