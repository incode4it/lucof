import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<SignUpComponent>,
    private fb: FormBuilder
  ) { }

  public signUpFormGroup: FormGroup = null;
  public capsOn: boolean = null;
  public hidePassword = null;
  public wrongCredentials = null;
  public scrollDown = null;

  ngOnInit() {
    this.signUpFormGroup =  this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]]
    });
  }

  closeSignUpWindow() {
    this.matDialogRef.close();
  }

  submitSignUpData() {
  }

}
