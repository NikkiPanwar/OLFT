import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../core/services/master/master.service';
import {Router } from '@angular/router';
import { Blog } from '../../core/models/interfaces/OlftInterface';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{

  _blogs:Blog[]=[];

constructor(private _service:MasterService , private router:Router){}

  ngOnInit(): void {
    
    this.Blogs();
  }

    
  Blogs(){
    this._service.getBlogs().subscribe({
      next:(response)=>{
        if(response.success){
        this._blogs = response.data;
        console.log("blogs data",response.data);
      }
      else{
        console.log("error:api response unseccessful");}
    },
    error: (err) => {
      console.error('Error fetching blogs:', err);},
  });
 }

}
