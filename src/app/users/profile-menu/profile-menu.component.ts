import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { SessionService, SessionQuery } from 'src/app/state/session';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  constructor(
    private overlay: Overlay,
    private sessionService: SessionService,
    private sessionQuery: SessionQuery,
  ) { }

  @ViewChild('profileMenuHeader') profileMenuHeader: ElementRef;
  @ViewChild(CdkPortal) profileMenuBody: CdkPortal;

  private profileMenuBodyOverlay: OverlayRef = null;
  public userNameFirstLetter: string = null;

  ngOnInit() {
    this.userNameFirstLetter = this.sessionQuery.getValue().firstName.slice(0, 1);
  }

  public openMenu(): void {
    this.profileMenuBodyOverlay = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.profileMenuHeader)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          }
        ])
        ,
        hasBackdrop: true,
        backdropClass: 'transparent-backdrop',
        panelClass: 'profle-menu-panel',
        width: 200,
        height: 200
    }
    );
    this.profileMenuBodyOverlay.attach(this.profileMenuBody);
    this.profileMenuBodyOverlay.backdropClick().subscribe(() => {
      this.profileMenuBodyOverlay.detach();
    });
  }

  public closeMenu(): void {
    this.profileMenuBodyOverlay.detach();
  }
  public logout(): void {
    this.sessionService.logout();
    this.closeMenu();
  }

}
