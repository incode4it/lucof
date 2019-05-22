import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { PublicRoutingModule } from './public-routing.module';
import { WorkersComponent } from './workers/workers.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksFilterComponent } from './tasks/tasks-filter/tasks-filter.component';
import {TasksModule} from '../tasks/tasks.module';

@NgModule({
  declarations: [
      HomeComponent,
      WorkersComponent,
      ProjectsComponent,
      TasksComponent,
      TasksFilterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
    TasksModule
  ],
  exports: [
  ]
})
export class PublicModule { }
