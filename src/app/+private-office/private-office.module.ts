import { PostComponent } from './components/posts/components/post/post.component';
import { PostListComponent } from './components/posts/components/post-list/post-list.component';
import { AllPostListComponent } from './components/all-posts/components/post-list/all-post-list.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllPostComponent } from './components/all-posts/components/post/all-post.component';
import { NewPostListComponent } from './components/new-posts/components/post-list/new-post-list.component';
import { NgModule } from '@angular/core';
import { PrivateOfficeComponent } from './private-office.component';
import { PrivateOfficeRoutingModule } from './routes/private-office-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from '../user/components/user-list/user-list.component';
import { UserComponent } from '../user/components/user/user.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ApproveDialogComponent } from '../dialogs/approve-dialog/approve-dialog.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { NewPostComponent } from './components/new-posts/components/post/new-post.component';
import { NewPostsComponent } from './components/new-posts/new-posts.component';
import { PostsComponent } from './components/posts/posts.component';
import { RecDialogComponent } from '../dialogs/rec-dialog/rec-dialog.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

@NgModule({
 entryComponents: [
  ApproveDialogComponent,
  RecDialogComponent,
 ],
  declarations: [
    PrivateOfficeComponent,
    ProfileComponent,
    UsersComponent,
    UserListComponent,
    UserComponent,
    NewPostComponent,
    NewPostListComponent,
    NewPostsComponent,
    AllPostComponent,
    AllPostsComponent,
    AllPostListComponent,
    PostListComponent,
    PostsComponent,
    PostComponent,
    StatisticComponent,
    ApproveDialogComponent,
    RecDialogComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtNq4sVj_NldtvuOvpZ_LojYpJJH9YTM'
    }),
    ChartsModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    PrivateOfficeRoutingModule,
    MaterialModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
})
export class PrivateOfficeModule { }
