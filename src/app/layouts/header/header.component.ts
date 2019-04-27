import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private mediaObserver: MediaObserver,
    private matDialog: MatDialog
  ) { }

  @Output() public sidenavToggle: EventEmitter<void> = new EventEmitter();

  public mediaStatus: string = null;
  transformStyle = 'translateX(0px) scaleX(123)';

  async ngOnInit() {
    const media$ = this.mediaObserver.asObservable().subscribe(
      (val: MediaChange[]) => {
        this.mediaStatus = val[0].mqAlias;
        media$.unsubscribe();
    });
  }

  public openLogin(): void {
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

  public openSignUp(): void {
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

  public emitToggleAction(): void {
    this.sidenavToggle.emit();
  }

  public calculateLineTransformation(event: MouseEvent): void {
    const offsetLeft = (event.target as HTMLElement).offsetLeft;
    const offsetWidth = (event.target as HTMLElement).offsetWidth;
    this.transformStyle = `translateX(${offsetLeft}px) scaleX(${offsetWidth})`;
  }

}
