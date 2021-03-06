import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/materia.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackCapsDirective } from './directives/track-caps.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SafePipe } from './pipes/safe.pipe';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';




@NgModule({
  declarations: [TrackCapsDirective, StopPropagationDirective, SafePipe],
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
    ScrollingModule,
    SafePipe
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2500,
        panelClass: 'lucof-snack'
      }}
  ]
})
export class CoreModule { }
