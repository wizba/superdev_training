import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerPage',
  templateUrl: './registerPage.component.html',
  styleUrls: ['./registerPage.component.scss']
})
export class RegisterPageComponent implements OnInit {

  validatingForm: FormGroup;

  ngOnInit() {
    //registering form controls
    this.validatingForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });

  }

  //simple getters controllers
  get input() { return this.validatingForm.get('email'); }
  get nameInput() { return this.validatingForm.get('name'); }
  get surnameInput() { return this.validatingForm.get('surname'); }
  get passwordInput(){ return this.validatingForm.get('password')}

}
