import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { List } from 'immutable';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<SignUpComponent>,
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  public signUpFormGroup: FormGroup = null;
  public capsOn: boolean = null;
  public hidePassword = true;
  public wrongCredentials = null;
  public loading = false;
  public success = false;

  public errorList: List<string> = List();

  ngOnInit() {
    this.signUpFormGroup =  this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(256)]],
      password: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(256)]]
    });
  }

  closeSignUpWindow() {
    this.matDialogRef.close();
  }

  async submitSignUpData() {
    if (this.signUpFormGroup.valid) {
      this.loading = true;
      try {
        this.errorList = this.errorList.clear();
        const res = await this.authService.performSignUp(this.signUpFormGroup.value).toPromise();
        this.loading = false;
        this.success = true;
      } catch (err) {
        if (err.error.message === 'This email already exists') {
          this.errorList = this.errorList.push('Email-ul dat deja este înregistrat');
          this.loading = false;
        }
      }
    }
  }

  scrollDown() {

  }

}
