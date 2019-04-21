import { SessionStore } from './session.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private sessionStore: SessionStore) {}

  public updateToken(token: string): void {
    this.sessionStore.update({token});
  }

  public updateName(name: string): void {
    this.sessionStore.update({name});
  }

}
