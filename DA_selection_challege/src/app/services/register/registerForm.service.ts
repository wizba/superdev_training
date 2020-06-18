import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {
  validatingForm: FormGroup;
constructor() {

  this.validatingForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email])
  });

 }

  get input() { return this.validatingForm.get('email'); }
  get nameInput() { return this.validatingForm.get('name'); }
  get surnameInput() { return this.validatingForm.get('surname'); }
  get passwordInput(){ return this.validatingForm.get('password')}

}
