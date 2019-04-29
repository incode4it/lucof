import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  entryComponents: [LoginComponent, SignUpComponent],
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    CoreModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
