import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { IUser } from 'src/app/user/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private router: Router, private authService: AuthenticationService) {

  }

  public registForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  public signUp() {

    let user: IUser;

    user = {
      email: this.registForm.controls['email'].value,
      password: this.registForm.controls['password'].value,
      phone: this.registForm.controls['phone'].value
    };

    this.authService.signUp(user);
  }

  public signIn() {
    this.router.navigate([`/authorization`]);
  }
}
