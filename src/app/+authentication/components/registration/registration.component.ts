import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { IUser } from '../../../user/models/User';
import { AuthenticationService } from '../../services/authentication.service';
import { MyErrorStateMatcher } from '../../../models/errors/error.matcher';
import { switchMap, tap } from 'rxjs/operators';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public matcher: MyErrorStateMatcher = new MyErrorStateMatcher();

  public registForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    passwords: this.fb.group({
      password: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      repeat: new FormControl('', [Validators.required, Validators.maxLength(255)])
    }, { validator: this.matcher.equalValueValidator('password', 'repeat') }),
  });

  constructor(private router: Router, private authService: AuthenticationService, private fb: FormBuilder) {

  }

  public signUp(): void {

    let user: IUser;

    user = {
      email: this.registForm.controls['email'].value,
      firstName: this.registForm.controls['firstName'].value,
      lastName: this.registForm.controls['lastName'].value,
      password: this.registForm.value.passwords.password,
    };

    this.authService.signUp(user)
      .pipe(
        switchMap(
          () => this.authService.logIn(user.email, user.password),
        )
      )
      .subscribe(
        () => { },
        (error) => {
          this.registForm.setErrors({
            'badRequest': true,
          });
        }
      );
  }

  public keyDown($event) {
    if ($event.keyCode === 13) {
      this.signUp();
      $event.preventDefault();
    }
  }

  public signIn($event: Event): void {
    this.router.navigate([`/authorization`]);
    $event.preventDefault();
  }

}
