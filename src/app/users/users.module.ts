import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ProfileMenuComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    ProfileMenuComponent
  ]
})
export class UsersModule { }
