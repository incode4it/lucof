import { TasksStore, createSessionState } from './tasks.store';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { IUserLogin } from 'src/app/auth/interfaces/user-login.dto';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(
    private sessionStore: TasksStore,
    private authService: AuthService,
    private router: Router,
    ) {}

  private openLoginScreenSubject = new BehaviorSubject(null);
  public openLoginScreen$ = this.openLoginScreenSubject.asObservable();

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
        this.sessionStore.update(createSessionState(res.token));
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.sessionStore.update(createSessionState());
    this.router.navigate(['/']);
  }

  public openLoginScreen(): void {
    this.openLoginScreenSubject.next(true);
  }

}
