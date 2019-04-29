import { SessionStore, createTokenState } from './session.store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { IUserLogin } from 'src/app/auth/interfaces/user-login.dto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private authService: AuthService
    ) {}

  public updateToken(token: string): void {
    this.sessionStore.update({token});
  }

  public updateName(firstName: string): void {
    this.sessionStore.update({firstName});
  }

  public login(userCredentials: IUserLogin): Observable<any> {
    return this.authService.performLogin(userCredentials).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
        this.sessionStore.update(createTokenState(res.token));
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.sessionStore.update(createTokenState());
  }

}
