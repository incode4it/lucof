import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  entryComponents: [LoginComponent],
  declarations: [LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
