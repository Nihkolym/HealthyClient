import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './+authentication/services/authentication.service';
import { LocalizationService } from './services/localization.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from './snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public isLoggedIn: boolean;

  ioNotify: Subscription;

  constructor(
    public http: HttpClient,
    private authService: AuthenticationService,
    private localService: LocalizationService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.localService.Init();

    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngDoCheck(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  public openSnackBar(data: any) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['animated', 'fadeInLeft', 'bar'],
      data: {
        task: data.task,
        name: `${data.user.firstName } ${data.user.lastName}`
      },
      duration: 20000,
    });
  }
}
