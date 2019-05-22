import { Query } from '@datorama/akita';
import { SessionState, TasksStore } from './tasks.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksQuery extends Query<SessionState> {
  constructor(protected store: TasksStore) {
    super(store);
  }
  public get isLoggedIn(): boolean {
    return !!this.getValue().token && !this.getValue().isExpired;
  }

  public $isLoggedIn: Observable<boolean> = this.select(state => !!state.token && !state.isExpired);

}
