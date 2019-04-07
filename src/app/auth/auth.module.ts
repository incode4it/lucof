import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  entryComponents: [LoginComponent],
  declarations: [LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    CoreModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    SignInComponent
  ]
})
export class AuthModule { }
