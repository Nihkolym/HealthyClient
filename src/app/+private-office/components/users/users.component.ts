import { RecDialogComponent } from './../../../dialogs/rec-dialog/rec-dialog.component';
import { MatDialog } from '@angular/material';
import { IDisease } from './../../../user/models/Disease';
import { DiseaseService } from './../../../services/disease.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../user/models/User';
import { UserService } from '../../../user/services/user.service';
import { NotificationService } from '../../../notification/services/notification.service';
import { mergeMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: IUser[];
  public diseases: IDisease[];

  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'gender', 'age', 'disease', 'actions'];

  constructor(
    private userService: UserService,
    private notifyService: NotificationService,
    private disServices: DiseaseService,
    private dialog: MatDialog,
  ) { }

  public remove($event): void {
    this.userService.deleteUser($event).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== $event);
    });
  }

  public getDisease(id: number) {
    const viewDis = this.diseases.find((disease) => disease.id === id);

    if (viewDis) {
      return viewDis.name;
    }
  }

  public getUserReccomendation(id: number) {
    this.userService.getUserRecommandation(id).subscribe((rec) => {
      if (rec) {
        this.dialog.open(RecDialogComponent, {
          data: {
            personalRec: rec,
          }
        });
      }
    });
  }

  ngOnInit(): void {
    let users: IUser[];

    this.disServices.getAllDiseases().subscribe((diseases) => {
      this.diseases = diseases;
    });

    this.userService.getAllUsers().pipe(
      tap((data) => {
          users = data;
      }),
      mergeMap<IUser[], IUser>(() => this.userService.getUser())
    ).subscribe((me: IUser) => {
      this.users = users.filter((user) => user.id !== me.id);
    });
  }
}
