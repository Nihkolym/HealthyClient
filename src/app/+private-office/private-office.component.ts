import { NotificationService } from './../notification/services/notification.service';
import { NotificationComponent } from './../notification/notification.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../+authentication/services/role.service';
import { Role } from '../models/Role';
import { RecDialogComponent } from '../dialogs/rec-dialog/rec-dialog.component';
import { UserService } from '../user/services/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-private-office',
  templateUrl: './private-office.component.html',
  styleUrls: ['./private-office.component.css']
})
export class PrivateOfficeComponent implements OnInit {
  public isMenuOpen = false;
  public role;
  public Role = Role;

  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
  ) { }

  public toggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public getInfo() {
    this.userService.getPersonalRecommandation().subscribe(personal => {
      if (personal) {
        const dialogRef = this.dialog.open(RecDialogComponent, {
          data: {
              personalRec: personal,
          }
        });
      } else {
        this.notificationService.notify('Errors.HaveNoRec');
      }
  });
  }

  ngOnInit(): void {
    this.role = this.roleService.Role;
  }
}
