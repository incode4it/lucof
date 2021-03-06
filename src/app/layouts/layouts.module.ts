import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    CoreModule,
    AuthModule,
    RouterModule,
    UsersModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent
  ]
})
export class LayoutsModule { }
