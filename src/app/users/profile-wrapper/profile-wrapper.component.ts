import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-profile-wrapper',
  templateUrl: './profile-wrapper.component.html',
  styleUrls: ['./profile-wrapper.component.scss']
})
export class ProfileWrapperComponent implements OnInit {

  constructor(
    private mediaObserver: MediaObserver,
  ) { }

  public mediaStatus: string = null;

  ngOnInit() {
    const media$ = this.mediaObserver.asObservable().subscribe(
      (val: MediaChange[]) => {
        this.mediaStatus = val[0].mqAlias;
        media$.unsubscribe();
    });
  }

}
