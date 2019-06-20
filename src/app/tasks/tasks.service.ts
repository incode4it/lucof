import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITask} from '../public/tasks/interfaces/task.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ActionStatus } from '../shared/interfaces/action-status.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTasks(): Observable<ITask[]> {
    return this.httpClient.get('/api/tasks')
      .pipe(map(r => r as ITask[]));
  }

  public createTask(task: ITask): Observable<ITask> {
    return this.httpClient.post('api/tasks', task)
      .pipe(map(r => r as ITask));
  }

  public getTask(id: string): Observable<ITask> {
    return this.httpClient.get(`api/tasks/${id}`)
      .pipe(map(r => r as ITask));
  }

  public getMyTasks(): Observable<ITask[]> {
    return this.httpClient.get('/api/tasks/my_tasks')
      .pipe(map(r => r as ITask[]));
  }

  public deleteTask(id: string): Observable<ActionStatus> {
    return this.httpClient.delete(`/api/tasks/${id}`)
    .pipe(map(r => r as ActionStatus));
  }
}
