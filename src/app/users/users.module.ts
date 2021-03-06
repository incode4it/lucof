import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { CoreModule } from '../core/core.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileWrapperComponent } from './profile-wrapper/profile-wrapper.component';
import { UsersRoutingModule } from './users-routing.module';
import { DealsComponent } from './deals/deals.component';
import { ProfileDetailsFieldComponent } from './profile-details/profile-details-field/profile-details-field.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../auth/token-interceptor.service';
import { ProfileTasksComponent } from './profile-tasks/profile-tasks.component';
import { TaskCreateComponent } from './profile-tasks/task-create/task-create.component';
import {TasksModule} from '../tasks/tasks.module';

@NgModule({
  declarations: [ProfileMenuComponent, ProfileDetailsComponent, ProfileWrapperComponent, DealsComponent, ProfileDetailsFieldComponent, ProfileTasksComponent, TaskCreateComponent],
  imports: [
    CommonModule,
    CoreModule,
    UsersRoutingModule,
    TasksModule,
  ],
  exports: [
    ProfileMenuComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]
})
export class UsersModule { }
