import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthFormComponent } from './auth-form/auth-form.component';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthentificationRoutingModule } from './routes/authentification-routing.module';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { AuthentificationComponent } from './authentification.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    AuthorizationComponent,
    AuthFormComponent,
    AuthentificationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AuthentificationRoutingModule,
    MaterialModule
  ],
  exports: [
    AuthentificationComponent
  ]

})
export class AuthentificationModule { }
