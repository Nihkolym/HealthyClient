import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { MyErrorStateMatcher } from '../../../models/errors/error.matcher';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  public authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(255)]),
  });

  public matcher: MyErrorStateMatcher = new MyErrorStateMatcher();

  constructor(private router: Router, private authService: AuthenticationService) {

  }

  public signUp($event: Event): void {
    this.router.navigate([`/registration`]);
    $event.preventDefault();
  }

  public signIn(): void {
    let email: string;
    let password: string;

    email = this.authForm.controls['email'].value;
    password = this.authForm.controls['password'].value;

    this.authService.logIn(email, password).subscribe(
      () => { }, (err) => {
        this.authForm.setErrors({
          'badRequest': true
        });
      });
  }
}
