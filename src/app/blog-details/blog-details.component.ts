import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  card1 = [{
    user: 'User',
    comments: 1,
    title: 'Hello World!',
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