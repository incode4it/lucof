import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TasksService} from '../../../tasks/tasks.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private tasksService: TasksService,
  ) {
    this.taskForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      online: [true, [Validators.required]],
      location: ['', []],
      budget: ['', [Validators.required]],
    });
  }

  public taskForm: FormGroup;

  ngOnInit() {
    this.taskForm.valueChanges.subscribe(value => {
      // this.cd.detectChanges();
    });
  }

  async submitTask(e) {
    const res = await this.tasksService.createTask(this.taskForm.value).toPromise();
    console.log(res);
  }

}
