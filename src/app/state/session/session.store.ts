
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface SessionState {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  expirationDate: Date;
  isExpired: boolean;
}

export function createTokenState(token?: string): SessionState {
  let state: SessionState = {
    token: null,
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    expirationDate: null,
    isExpired: null
  };
  if (token) {
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(token);
    state = {
      token,
      firstName: decodedToken.firstName,
      lastName: decodedToken.lastName,
      email: decodedToken.email,
      id: decodedToken.id,
      expirationDate: jwtHelper.getTokenExpirationDate(token),
      isExpired: jwtHelper.isTokenExpired(token),
    };
  }
  return state;
}

export function createInitialState(): SessionState {
  return createTokenState(localStorage.getItem('token'));
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
