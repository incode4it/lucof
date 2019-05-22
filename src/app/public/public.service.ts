import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from './tasks/interfaces/task.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public getAllTask(): Observable<ITask[]> {
    return this.httpClient.get('/api/tasks')
      .pipe(map(r => r as ITask[]));
  }
}
