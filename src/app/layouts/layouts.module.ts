import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CoreModule,
    AuthModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class LayoutsModule { }
