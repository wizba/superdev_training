import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-free';
 input1 :string ; 
 input2 :string ;

 constructor(private toastr: ToastrService) {}
 Save() {
  this.toastr.success('today is cold', 'Code is running baba');
}
}

