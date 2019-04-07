import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { PublicRoutingModule } from './public.routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
  ]
})
export class PublicModule { }
