import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterFormService } from 'src/app/services/register/registerForm.service';
import { LoginService } from 'src/app/services/login/loginService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent implements OnInit {

 
  
  showLog=true;
  constructor(private toastr: ToastrService,
    public registerForm:RegisterFormService,
    public loginService:LoginService,
    private router: Router){}
  ngOnInit() {
  }

  

  showSuccess(infor) {
    this.toastr.success(infor, 'user');
    this.router.navigate(['home']);
    
  }

}
