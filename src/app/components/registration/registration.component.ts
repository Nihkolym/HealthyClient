import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private router: Router) {

  }

  public signUp() {
    alert('this is signUp');
  }

  public signIn() {
    this.router.navigate([`/authorization`]);
  }
}
