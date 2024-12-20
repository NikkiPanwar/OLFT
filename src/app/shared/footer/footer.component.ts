import { Component, OnInit } from '@angular/core';
import { Contact } from '../../core/models/interfaces/OlftInterface';
import { MasterService } from '../../core/services/master/master.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

_footer:Contact[]=[];

constructor(private _service:MasterService)
  {}
//footer information
ngOnInit(): void {
  

// this._service.getFooter().subscribe({
//   next:(data)=>{
//     this._footer=data;
//     console.log("footer data")
//     console.log("contacts",data);
//   },
//   error:(err)=>{
//     console.log(err)}
// });

}
}