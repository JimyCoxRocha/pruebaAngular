import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthMessages } from 'src/app/core/messages/AuthMessages';
import { RoutingSelectedService } from 'src/app/core/services/routing-selected.service';
import { UserLoginService } from '../services/user-login.service';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageForm = '';
  myForm: FormGroup = this.fb.group({
    user: [ '', [Validators.required, Validators.minLength(3) ] ],
    password: [ '', [Validators.required, Validators.minLength(3) ] ],
  });

  constructor( 
    private fb: FormBuilder,
    private userLogin: UserLoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  validateField( field: string ){
    const messages = AuthMessages.login.validation;
    if( this.myForm.get(field)?.errors && this.myForm.get(field)?.touched ){
      console.log(this.myForm.get(field)?.errors);

      return AuthMessages.login.validation[field as keyof typeof messages]
    }
    return '';
  }


  login(){
    console.log();
    this.messageForm = '';
    const user = this.myForm.get('user');
    const password = this.myForm.get('password');
    this.userLogin.validateUser(user?.value, password?.value)
    .subscribe( resp => {
      resp 
      ? this.route.navigate(['']) 
      : this.messageForm = AuthMessages.login.apiReturn.ERROR_LOGIN
    });
    user?.valueChanges.subscribe( resp => {  this.messageForm = '' });
    password?.valueChanges.subscribe( resp => {  this.messageForm = '' });
  }
}
