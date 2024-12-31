import { Component } from '@angular/core';

@Component({
  selector: 'app-bloge-detail-page',
  templateUrl: './bloge-detail-page.component.html',
  styleUrl: './bloge-detail-page.component.css'
})
export class BlogeDetailPageComponent {
 
  card1 = [{
    user: 'User',
    comments: 1,
    title: 'Hello World!',
    image: 'assets/images/1.jpg',
    link: 'package'
  }];
 
reviewData = {
  name: '',
  email: '',
  message:'',
  title: '',
  autoSave:'false',
};

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
isReviewFormVisible: boolean = false;

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
