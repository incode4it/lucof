import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';
import { ITask } from './interfaces/task.interface';
import { List } from 'immutable';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(
    private publicService: PublicService
  ) { }

  public tasks: List<ITask> = null;

  async ngOnInit() {
    this.tasks = List(await this.publicService.getAllTask().toPromise());
    console.log(this.tasks.toJS());
  }

}
