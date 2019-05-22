import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionQuery } from './state/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    private sessionQuery: SessionQuery) {}

  title = 'lucof';

  async ngOnInit() {
    console.log(this.sessionQuery.isLoggedIn);
    this.sessionQuery.$isLoggedIn.subscribe(v => {
      console.log(v);
    });
  }
}
