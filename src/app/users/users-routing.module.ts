import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileWrapperComponent } from './profile-wrapper/profile-wrapper.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { DealsComponent } from './deals/deals.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ProfileWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
      {
        path: 'details',
        component: ProfileDetailsComponent
      },
      {
        path: 'deals',
        component: DealsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
