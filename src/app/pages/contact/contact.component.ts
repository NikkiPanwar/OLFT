import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../../core/services/master/master.service';
import { ClientQuery } from '../../core/models/interfaces/OlftInterface';
import { finalize } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  
  enquiryForm!: FormGroup;
  isDisabled:boolean = true;
  packageId: number | undefined ;

constructor(private _service:MasterService , private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.enquiryForm  
    this.enquiryForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
}

  onSubmit(): void{
     this.isDisabled = true
    if (this.enquiryForm?.valid && this.packageId ) {
        let package_id = this.packageId
        let enquiryData : ClientQuery = {...this.enquiryForm.value,package_id  }
      console.log("hello submit form")
      console.log(this.enquiryForm.value)
      this._service.postFormData(enquiryData).pipe(finalize(()=> this.enquiryForm.reset()) ) .subscribe(
        {
        next: (response:any) => {
          console.log('Enquiry submitted successfully', response);
          this.enquiryForm.reset(); 
          this.isDisabled = false;
         
        },
        error: (err) => {
          console.log('Error submitting enquiry', err);
          this.isDisabled = false
          
        },
      }
    );
    }
    }
}


