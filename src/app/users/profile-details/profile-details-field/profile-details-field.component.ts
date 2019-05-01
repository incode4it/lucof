import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../../users.service';
import { SessionQuery } from 'src/app/state/session';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-profile-details-field',
  templateUrl: './profile-details-field.component.html',
  styleUrls: ['./profile-details-field.component.scss']
})
export class ProfileDetailsFieldComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
    private usersService: UsersService,
    private sessionQuery: SessionQuery,
    private snackBar: MatSnackBar,
  ) { }

  @Input() fieldName: string;
  @Input() control: FormControl;
  @Input() valueKey: string = null;

  @ViewChild('input') input: ElementRef;

  public editMode = false;
  private previousValue: any = null;

  ngOnInit() {
    this.previousValue = this.control.value;
  }

  public edit(): void {
    this.editMode = true;
    this.cd.detectChanges();
    this.input.nativeElement.focus();
    this.input.nativeElement.select();
  }

  public async save(): Promise<void> {
    this.editMode = false;
    try {
      await this.usersService.updateUser(
        {
          [this.valueKey]: this.control.value
        },
        this.sessionQuery.getValue().id
      ).toPromise();
      this.previousValue = this.control.value;
      this.snackBar.open('Salvat cu succes', 'Închide');
    } catch (err) {
      this.control.setValue(this.previousValue);
      this.snackBar.open('Oops, ceva nu a mers bine', 'Închide');
    }

  }

  public cancel(): void {
    this.control.setValue(this.previousValue);
    this.editMode = false;
  }

}
