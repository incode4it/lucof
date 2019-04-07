import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openLogin() {
    this.matDialog.open(LoginComponent, {
      panelClass: 'full-screen-dialog',
      autoFocus: false,
      closeOnNavigation: true
    });
  }

}
