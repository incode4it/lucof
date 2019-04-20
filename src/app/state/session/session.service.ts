import { SessionStore } from './session.store';

export class SessionService {
  constructor(private sessionStore: SessionStore) {}

  public updateToken(token: string): void {
    this.sessionStore.update({token});
  }

  public updateName(name: string): void {
    this.sessionStore.update({name});
  }

}
