import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  constructor(private router: Router) {

  }

  public signUp() {
    this.router.navigate([`/registration`]);
  }

  public signIn() {
    alert('this is signIn');
  }
}
