import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { PublicRoutingModule } from './public-routing.module';
import { WorkersComponent } from './workers/workers.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [HomeComponent, WorkersComponent, ProjectsComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
  ]
})
export class PublicModule { }
