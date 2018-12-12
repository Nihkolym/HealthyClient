import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from '../components/add-post/add-post.component';
import { AuthenticationGuardService } from '../../+authentication/services/authentication-guard.service';
import { EditPostComponent } from '../components/edit-post/edit-post.component';

const postsRoutes: Routes = [
  {
    path: 'posts/add',
    component: AddPostComponent,
    canActivate: [AuthenticationGuardService],
  },
  {
    path: 'posts/edit/:id',
    component: EditPostComponent,
    canActivate: [AuthenticationGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(postsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule {

}
