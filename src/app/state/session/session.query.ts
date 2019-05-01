import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }
  public get isLoggedIn(): boolean {
    return !!this.getValue().token && !this.getValue().isExpired;
  }

  public $isLoggedIn: Observable<boolean> = this.select(state => !!state.token && !state.isExpired);

}
