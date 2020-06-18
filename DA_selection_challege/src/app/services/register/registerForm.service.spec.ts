/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterFormService } from './registerForm.service';

describe('Service: RegisterForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterFormService]
    });
  });

  it('should ...', inject([RegisterFormService], (service: RegisterFormService) => {
    expect(service).toBeTruthy();
  }));
});
