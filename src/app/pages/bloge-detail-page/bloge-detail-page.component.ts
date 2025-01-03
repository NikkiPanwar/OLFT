import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../core/services/master/master.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Blog, BlogResponse, Gallery, GalleryResponse } from '../../core/models/interfaces/OlftInterface';
import { map } from 'rxjs';

@Component({
  selector: 'app-bloge-detail-page',
  templateUrl:'./bloge-detail-page.component.html',
  styleUrl: './bloge-detail-page.component.css'
})
export class BlogeDetailPageComponent implements OnInit{
 
   _blogs:Blog[]=[];
   
     filteredGalleries: Gallery[] = [];
     _galleries:Gallery[]=[];

     blog: Blog | undefined;

    packageId: number | undefined ;

  searchQuery: string = ''; 
  results: string[] = [' Adventure Tour', ' Couple Tour', ' Group Tour', 'Holiday Tour','family Tour']; 
filteredResults: string[] = []; 

isReviewFormVisible: boolean = false;
reviewData = { name: '', email: '', message:'', title: '', autoSave:'false',};

constructor(private _service:MasterService ,private router:Router , private route:ActivatedRoute)
{

  // Get the package ID from the route params
  this.route.params.subscribe(params => {
    this.packageId = +params['id']; 
    console.log('Package ID', this.packageId);
  });
}


ngOnInit(): void {   
    this.Blogs();
    this.Gallery();
    if (this.packageId) {
      this.BlogDetails(this.packageId);
    }
}


Blogs() {
  this._service.getBlogs().subscribe({
    next:(response:BlogResponse)=>{
      if(response.success){
      this._blogs = response.data.slice(0,4);
      console.log("blogs data",this._blogs);
    }
    else{
      console.log("error:api response unsuccessful");}
  },
  error: (err) => {
    console.error('Error fetching blogs:', err);},
});
}


BlogDetails(id:number):void {
    this._service.getBlogDetails(id).subscribe({
      next: (data: Blog) => {
        this.blog = data;
        console.log('Blog details:', this.blog);
      },
      error: (err) => {
        console.error('Error fetching blog details:', err);
      },
    });
  }



  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredResults = [];
      return;
  }
    this.filteredResults = this.results.filter((item) =>
      item.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }



    // Fetch gallery based on packageId

    Gallery(){
      if (this.packageId) {
        this._service.getGallery(this.packageId).pipe
        (map((data:GalleryResponse)=>data.galleries)).subscribe({ //gallery
          next:(data:Gallery[])=>{
        this._galleries= data
            console.log('gallery data',data)
            console.log('galleries called');
            if(this._galleries?.length>0)
            {
              this.filterGalleries();
            }
          },
          error:(err)=>{
            console.log(err) }
 });
}  
 }

 // Filter galleries by packageId
 filterGalleries(): void {
  if (this.packageId) {
    this.filteredGalleries = this._galleries.filter(gallery =>
      gallery.pk_Package_id === this.packageId);
      console.log("filtered gallery",this.filteredGalleries)
  }
}

chunkedGalleries(galleries: Gallery[], chunkSize: number): Gallery[][] {
  const chunks: Gallery[][] = [];
  for (let i = 0; i < galleries.length; i += chunkSize) {
    chunks.push(galleries.slice(i, i + chunkSize));
  }
  return chunks;
}




  goToBlogDetailPage(packageId:number){
    this.router.navigate(['/blog',packageId])
   }



  card1 = [{
    user: 'User',
    comments: 1,
    title: 'Hello World!',
    image: 'assets/images/1.jpg',
    link: 'package'
  }];
 


submitReview() {
  console.log('Review submitted:', this.reviewData);
  this.resetReviewForm();
  this.toggleReviewForm();
}

resetReviewForm() {
  this.reviewData = {
    name: '',
    email: '',
    message:'',
    title:'',
    autoSave:'false',
  };
}

toggleReviewForm() {
  this.isReviewFormVisible = !this.isReviewFormVisible; 
}

onAutoSaveChange() {
  if (this.reviewData.autoSave) {
    this.autoSaveReviewData();
  }
}

autoSaveReviewData() {
  console.log('Auto-saving review data:', this.reviewData);
}
}
