
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

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
@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'session'})
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
