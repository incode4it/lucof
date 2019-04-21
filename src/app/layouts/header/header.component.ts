import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private mediaObserver: MediaObserver,
    private matDialog: MatDialog,
  ) { }

  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter();

  public mediaStatus: string = null;

  async ngOnInit() {
    const media$ = this.mediaObserver.asObservable().subscribe(v => {
      this.mediaStatus = v[0].mqAlias;
      media$.unsubscribe();
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

  public emitToggleAction() {
    this.sidenavToggle.emit();
  }

}
