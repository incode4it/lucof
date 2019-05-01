import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/ user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUser(id: string): Observable<IUser> {
    return this.httpClient.get(`/api/users/${id}`)
      .pipe(map(res => res as IUser));
  }

  public updateUser(user: Partial<IUser>, id: string): Observable<IUser> {
    return this.httpClient.post(`/api/users/${id}`, user)
      .pipe(map(res => res as IUser));
  }
}
