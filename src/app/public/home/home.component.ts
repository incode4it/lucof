import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private mediaObserver: MediaObserver
  ) { }

  public mediaStatus: string = null;

  ngOnInit() {
    this.mediaObserver.asObservable().subscribe(v => {
      this.mediaStatus = v[0].mqAlias;
      // console.log(v[0].mqAlias);
    });
  }

  openLogin() {
    const dialogConfig: MatDialogConfig = {
      autoFocus: false,
      closeOnNavigation: true
    };
    if (this.mediaStatus === 'xs') {
      dialogConfig.panelClass = 'full-screen-dialog';
    } else {
      dialogConfig.width = '450px';
      dialogConfig.height = '330px';
    }
    this.matDialog.open(LoginComponent, dialogConfig);
  }

  openSignUp() {
    const dialogConfig: MatDialogConfig = {
      autoFocus: false,
      closeOnNavigation: true
    };
    if (this.mediaStatus === 'xs') {
      dialogConfig.panelClass = 'full-screen-dialog';
    } else {
      dialogConfig.width = '450px';
      dialogConfig.height = '407px';
    }
    this.matDialog.open(SignUpComponent, dialogConfig);
  }

}
