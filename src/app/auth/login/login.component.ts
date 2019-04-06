import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder
  ) { }

  public wrongCredentials = false;
  public loginFormGroup: FormGroup;
  public hidePassword = true;

  public capsOn = false;

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
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

}
