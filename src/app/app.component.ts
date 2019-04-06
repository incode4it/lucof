import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matDialog: MatDialog) {
  }

  title = 'lucof';

  openLogin() {
    this.matDialog.open(LoginComponent, {
      panelClass: 'full-screen-dialog',
      autoFocus: false
    });
  }
}
