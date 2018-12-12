import { AllPostsComponent } from './../components/all-posts/all-posts.component';
import { PostsComponent } from './../components/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateOfficeComponent } from '../private-office.component';
import { AuthenticationGuardService } from '../../+authentication/services/authentication-guard.service';
import { ProfileComponent } from '../components/profile/profile.component';
import { UsersComponent } from '../components/users/users.component';
import { RoleGuardService } from '../../../app/+authentication/services/role-guard.service';
import { Role } from '../../models/Role';
import { NewPostsComponent } from '../components/new-posts/new-posts.component';

const privateOfficeRoutes: Routes = [
  {
    path: '', component: PrivateOfficeComponent, canActivate: [AuthenticationGuardService],
    children: [
      { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuardService] },
      {
        path: 'users', component: UsersComponent, canActivate: [AuthenticationGuardService, RoleGuardService],
        data: {
          expectedRole: Role.Admin
        },
      },
      {
        path: 'my-posts', component: PostsComponent, canActivate: [AuthenticationGuardService],
      },
      {
        path: 'all-posts', component: AllPostsComponent, canActivate: [AuthenticationGuardService],
      },
      {
        path: 'new-posts', component: NewPostsComponent, canActivate: [AuthenticationGuardService, RoleGuardService],
        data: {
          expectedRole: Role.Admin
        },
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(privateOfficeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateOfficeRoutingModule {

}
