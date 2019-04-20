
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  token: string;
  name: string;
}

export function createInitialState(): SessionState {
  return {
    token: localStorage.getItem('token') || null,
    name: null,
  };
}

@StoreConfig({name: 'session'})
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
