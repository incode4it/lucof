import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
@NgModule({
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatDividerModule,
    MatRippleModule
  ]
})
export class MaterialModule {
}
