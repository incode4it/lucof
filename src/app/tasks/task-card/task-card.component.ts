import {Component, Input, OnInit} from '@angular/core';
import {ITask} from '../../public/tasks/interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  constructor() { }

  @Input() task: ITask = null;

  ngOnInit() {
  }

}
