import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from './interfaces/user-login.dto';
import { Observable } from 'rxjs';
import { IUserSignUp } from './interfaces/user-sign-up.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public performLogin(user: IUserLogin): Observable<any> {
    return this.httpClient.post('/api/auth/login', user);
  }

  public performSignUp(user: IUserSignUp): Observable<any> {
    return this.httpClient.post('api/auth/sign-up', user);
  }
}
