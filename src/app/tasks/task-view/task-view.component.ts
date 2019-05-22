import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TasksService} from '../tasks.service';
import {ITask} from '../interfaces/task.interface';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
  ) { }

  public task: ITask = null;

  async ngOnInit() {
    const task$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tasksService.getTask(params.get('id'))
      )
    );
    task$.subscribe(r => {
      this.task = r;
    });
  }

}
