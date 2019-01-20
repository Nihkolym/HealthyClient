import { RecDialogComponent } from '../../../dialogs/rec-dialog/rec-dialog.component';
import { MatDialog } from '@angular/material';
import { IDisease } from '../../../user/models/Disease';
import { DiseaseService } from '../../../services/disease.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IUser } from '../../../user/models/User';
import { UserService } from '../../../user/services/user.service';
import { NotificationService } from '../../../notification/services/notification.service';
import { mergeMap, tap, switchMap } from 'rxjs/operators';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
})
export class StatisticComponent implements OnInit {

  public users: IUser[];
  public diseases: IDisease[];

  public dataset = [];
  public data = [];
  public labels = [];

  public chartType;

  constructor(
    private userService: UserService,
    private notifyService: NotificationService,
    private disServices: DiseaseService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.disServices.getAllDiseases()
      .pipe(
        tap((diseases) => this.diseases = diseases),
        switchMap(() => this.userService.getAllUsers())
      ).subscribe((users) => {
      this.users = users;

      this.setDoughnutData();

      this.labels = this.diseases.map((disease) => disease.name);
    });
  }

  public setDoughnutData() {
    this.chartType = 'doughnut';

    this.data = [];

    for (const disease of this.diseases) {
      const count = this.users.filter(user => user.idOfDisease === disease.id).length;

      this.data.push(count);
    }
  }

  public setDiagramData() {
    this.chartType = 'bar';

    this.dataset = [
      {data: [] },
    ];

    for (const disease of this.diseases) {
      const ages: number[] = this.users
        .filter((user) => user.idOfDisease === disease.id && user.age)
        .map(user => user.age);

      const count = ages.length;

      let averageAge = 0;
      if (count) {
        averageAge = ages.reduce((age, curAge) => age + curAge, 0) / count;
      }

      this.dataset[0].data.push(averageAge);
    }
  }

}
