import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  
  constructor( ) { }

  validateUser( user: string, pass: string ): Observable<boolean>{
    const _user = 'admin';
    const _password = 'admin';
    if( user === _user  && pass === _password)
      return of(true)
      
    return of(false)
  }
}
