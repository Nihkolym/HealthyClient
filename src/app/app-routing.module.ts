import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardService } from './+authentication/services/authentication-guard.service';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profile',  canActivate: [AuthenticationGuardService] },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
