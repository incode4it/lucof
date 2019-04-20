import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';
import { Observable } from 'rxjs';

export class SessionQuery extends Query<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }

  public $isLoggedIn: Observable<boolean> = this.select(state => !!state.token);

}
