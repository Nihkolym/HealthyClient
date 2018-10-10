import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  @Input() public title: string;
  @Output() public leftButtonClick: EventEmitter<void> = new EventEmitter();
  @Output() public rightButtonClick: EventEmitter<void> = new EventEmitter();

  public authForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  public singUp() {
    this.leftButtonClick.emit();
  }

  public singIn() {
    this.rightButtonClick.emit();
  }
}
