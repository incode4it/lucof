import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks/tasks.service';
import { ITask } from '../../tasks/interfaces/task.interface';

@Component({
  selector: 'app-profile-tasks',
  templateUrl: './profile-tasks.component.html',
  styleUrls: ['./profile-tasks.component.scss']
})
export class ProfileTasksComponent implements OnInit {

  constructor(
    private tasksService: TasksService
  ) { }

  public tasks: ITask[] = null;

  async ngOnInit() {
    this.tasks = await this.tasksService.getMyTasks().toPromise();
  }

  public async deleteTask(id: string) {
    await this.tasksService.deleteTask(id).toPromise();
    this.tasks = await await this.tasksService.getMyTasks().toPromise();
  }

}
