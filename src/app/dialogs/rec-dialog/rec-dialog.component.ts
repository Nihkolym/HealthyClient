import { IPersonalReccomandation } from '../../user/models/PersonalRecommandation';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-rec-dialog',
    templateUrl: './rec-dialog.component.html',
    styleUrls: ['./rec-dialog.component.css']
})
export class RecDialogComponent {
    public rec: IPersonalReccomandation;
    constructor(
        public dialogRef: MatDialogRef<RecDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log(data.personalRec);
      this.rec = data.personalRec;
    }
}
