import { DiseaseService } from './../../../services/disease.service';
import { IDisease } from './../../../user/models/Disease';
import {genders} from './../../../models/Gender';
import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../../../models/errors/error.matcher';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../user/services/user.service';
import { IUser } from '../../../user/models/User';
import { NotificationService } from '../../../notification/services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public user: IUser;

  public matcher = new MyErrorStateMatcher();
  public isPasswordOpen = false;

  public genders = genders;
  public diseases: IDisease[];

  public userForm = new FormGroup({
    info: this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
      idOfDisease: new FormControl(''),
      gender: new FormControl(''),
    }),
    passwords: this.fb.group({
      oldPassword: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      newPassword: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      repeat: new FormControl('', [Validators.required, Validators.maxLength(255)])
    }, { validator: this.matcher.equalValueValidator('newPassword', 'repeat') }),
  });

  constructor(public fb: FormBuilder,
    private userService: UserService,
    private notifyService: NotificationService,
    private diseaseService: DiseaseService,
  ) {

  }

  public toggle() {
    this.isPasswordOpen = !this.isPasswordOpen;
  }

  public ngOnInit(): void {
    this.diseaseService.getAllDiseases().subscribe((diseases) => {
      this.diseases = diseases;
    });

    this.userService.getUser().subscribe((user) => {
      this.user = user;
      this.userForm.controls.info.patchValue(user);
    });
  }

  public cancel() {
    this.userForm.controls.info.reset();
    this.userForm.controls.info.patchValue(this.user);
  }

  public save($event) {
    $event.preventDefault();

    if (
      (this.userForm.controls.info.valid && !this.isPasswordOpen)
      ||
      (this.userForm.valid && this.isPasswordOpen)
    ) {
      const oldPassword = this.userForm.value.passwords.oldPassword;
      const newPassword = this.userForm.value.passwords.newPassword;

      const user = {
        id: this.user.id,
        firstName: this.userForm.controls.info['controls']['firstName'].value,
        lastName: this.userForm.controls.info['controls']['lastName'].value,
        gender: this.userForm.controls.info['controls']['gender'].value,
        idOfDisease: this.userForm.controls.info['controls']['idOfDisease'].value,
        email: this.userForm.controls.info['controls']['email'].value,
        password: this.user.password,
      };

      if (newPassword) {
        Object.assign(user, newPassword);
      }

      this.userService.updateUser(user,
        oldPassword, newPassword
      ).subscribe(() => {
        this.notifyService.notify('Notification.User');
      },
        (err) => {
          this.userForm.setErrors({
            'badRequest': true
          });
        });
    }
  }
}
