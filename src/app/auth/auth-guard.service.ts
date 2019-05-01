import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { SessionQuery, SessionService } from '../state/session';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private sessionQuery: SessionQuery,
    private sessionService: SessionService,
    public router: Router) {}

  canActivate(): boolean {
    if (!this.sessionQuery.isLoggedIn) {
      this.sessionService.openLoginScreen();
      return false;
    }
    return true;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
