import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import {CoreModule} from '../core/core.module';
import { TaskViewComponent } from './task-view/task-view.component';

@NgModule({
  declarations: [TaskCardComponent, TaskViewComponent],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    TaskCardComponent,
    TaskViewComponent
  ]
})
export class TasksModule { }
