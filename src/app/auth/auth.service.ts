import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from './interfaces/user-login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public performLogin(user: IUserLogin): any {
    return this.httpClient.post('/api/auth/login', user);
  }

  public perfromSignUp() {

  }
}
