import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkScrollable } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { ExtendedScrollToOptions } from '@angular/cdk/scrolling';
import { SessionService } from 'src/app/state/session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) { }

  @ViewChild(CdkScrollable) cscroll: CdkScrollable ;

  public wrongCredentials = false;
  public loginFormGroup: FormGroup;
  public hidePassword = true;

  public capsOn = false;

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  closeLoginWindow() {
    this.dialogRef.close();
  }

  async submitCredentials() {
    console.log(this.loginFormGroup.value);
    try {
      await this.sessionService.login(this.loginFormGroup.value).toPromise();
      this.dialogRef.close();
    } catch (err) {
      if (err.status === 400) {
        switch (err.error.message) {
          case 'wrong credentials':
            this.wrongCredentials = true;
            break;
        }
      }
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      if (control.controls) { // control is a FormGroup
        this.markFormGroupTouched(control);
      } else { // control is a FormControl
        control.markAsTouched();
      }
    });
   }

  public scroll(direction: 'top' | 'bottom'): void {
    const scroll: ExtendedScrollToOptions = {
      behavior: 'smooth'
    };
    direction === 'top' ? scroll.top = 0 : scroll.bottom = 0;
    this.cscroll.scrollTo(scroll);
  }

}
