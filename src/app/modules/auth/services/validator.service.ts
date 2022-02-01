import { Injectable } from '@angular/core';
import { AbstractControl, AbstractControlOptions } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor() { }

  validateUser( control: AbstractControl ){
    if(control.value === 'admin')
      return null;
    else
      return {
        invalidUser: true
      }
  }

  validatePass( control: AbstractControl ){
    if(control.value === 'admin')
      return null;
    else
      return {
        invalidPass: true
      }
  }
}
