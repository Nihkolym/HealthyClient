import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IPost } from '../../models/Post';

@Component({
    selector: 'app-approve-dialog',
    templateUrl: './approve-dialog.component.html',
    styleUrls: ['./approve-dialog.component.css']
})
export class ApproveDialogComponent {
    public post: IPost;

    constructor(
        public dialogRef: MatDialogRef<ApproveDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.post = data.post;
    }

    public onNoClick() {
        this.dialogRef.close(false);
    }

    public onOkClick() {
        this.dialogRef.close(true);
    }
}
