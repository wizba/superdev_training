import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  validatingForm: FormGroup;
constructor() {this.validatingForm = new FormGroup({
  name: new FormControl(null, [Validators.required]),
  surname: new FormControl(null, [Validators.required]),
  password: new FormControl(null, [Validators.required]),
  email: new FormControl(null, [Validators.required, Validators.email])
});

}

get input() { return this.validatingForm.get('email'); }

}
