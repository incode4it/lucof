import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/login/login.component';
import { SessionQuery } from './state/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    private sessionQuery: SessionQuery) {}

  title = 'lucof';

  async ngOnInit() {
    console.log(this.sessionQuery.isLoggedIn);
    this.sessionQuery.$isLoggedIn.subscribe(v => {
      console.log(v);
    });
  }

  openLogin() {
    this.matDialog.open(LoginComponent, {
      panelClass: 'full-screen-dialog',
      autoFocus: false
    });
  }
}
