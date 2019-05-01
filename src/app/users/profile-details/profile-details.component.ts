import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { IUser } from '../interfaces/ user.interface';
import { SessionQuery } from 'src/app/state/session';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private usersService: UsersService,
    private sessionQuery: SessionQuery
    ) { }

  public profileForm: FormGroup;

  private user: IUser;

  async ngOnInit() {
    try {
      this.user = await this.usersService.getUser(
        this.sessionQuery.getValue().id
      ).toPromise();
      this.profileForm = this.fb.group({
        firstName: [this.user.firstName],
        lastName: [this.user.lastName],
        email: [this.user.email]
      });
      this.cd.detectChanges();
    } catch (err) {

    }
  }

}
