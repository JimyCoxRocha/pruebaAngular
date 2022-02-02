import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  
  constructor( private storage: StorageService ) { }

  validateUser( user: string, pass: string ): Observable<boolean>{
    const _user = 'admin';
    const _password = 'admin';
    if( user === _user  && pass === _password){
      this.storage.setUser(user)
      return of(true);
    }
      
    return of(false)
  }

  userIsLogged(){
    if(this.storage.getLocalStorage('user'))
      return true;

    return false;
  }
}
