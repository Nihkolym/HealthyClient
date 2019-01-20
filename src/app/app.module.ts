import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './+authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './+authentication/services/authentication.service';
import { AuthenticationGuardService } from './+authentication/services/authentication-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from '../app/+authentication/models/token.interceptor';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DealService } from './services/deal-service';
import { ErrorModule } from './error/error.module';
import { LoggedGuardService } from './+authentication/services/logged-guard.service';
import { TokenService } from './+authentication/services/token.service';
import { PrivateOfficeModule } from './+private-office/private-office.module';
import { UserService } from './user/services/user.service';
import { RoleGuardService } from './+authentication/services/role-guard.service';
import { RoleService } from './+authentication/services/role.service';
import { ManagerService } from './user/services/manager.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { LocalizationService } from './services/localization.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { SnackBarComponent } from './snackbar/snackbar.component';
import { NotificationService } from './notification/services/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { PostsModule } from './+posts/posts.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  entryComponents: [SnackBarComponent, NotificationComponent, ErrorDialogComponent],
  declarations: [
    AppComponent,
    NavBarComponent,
    SnackBarComponent,
    NotificationComponent,
    ErrorDialogComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    PostsModule,
    PrivateOfficeModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    ErrorModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      }
    }),
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    DealService,
    LoggedGuardService,
    RoleGuardService,
    UserService,
    RoleService,
    TokenService,
    TranslateService,
    LocalizationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    DealService,
    ManagerService,
    MatSnackBar,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
