import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../user/models/User';
import { UserService } from '../../../user/services/user.service';
import { NotificationService } from '../../../notification/services/notification.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: IUser[];

  constructor(private userService: UserService, private notifyService: NotificationService) { }

  public remove($event): void {
    this.userService.deleteUser($event).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== $event);
    });
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: IUser[]) => {
      this.users = users;
    });
  }
}
