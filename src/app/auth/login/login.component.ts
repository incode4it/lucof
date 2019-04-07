import { Component, OnInit, ChangeDetectionStrategy, Inject, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CdkScrollable } from '@angular/cdk/overlay';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder
  ) { }

  @ViewChild(CdkScrollable) cscroll: CdkScrollable ;

  public wrongCredentials = false;
  public loginFormGroup: FormGroup;
  public hidePassword = true;

  public capsOn = false;

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    console.log(this.cscroll);
    console.log(this.cscroll.measureScrollOffset('bottom'));
  }

  closeLoginWindow() {
    this.dialogRef.close();
  }

  submitCredentials() {
    if (this.loginFormGroup.invalid) {
      this.markFormGroupTouched(this.loginFormGroup);
    }
    this.wrongCredentials = true;
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

  public scrollDown(): void {
    console.log('scroll');
    this.cscroll.scrollTo({
      bottom: 0
    });
    // this.scroll.scroll({
    //   document: this.document,
    //   scrollTarget: '.end',
    // });
    // this.scroll.sc
  }

}
