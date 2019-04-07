import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/materia.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackCapsDirective } from './directives/track-caps.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  declarations: [TrackCapsDirective, StopPropagationDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TrackCapsDirective,
    StopPropagationDirective,
    ScrollingModule
  ]
})
export class CoreModule { }
