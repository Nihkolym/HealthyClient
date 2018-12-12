import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../../../../models/Post';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ApproveDialogComponent } from '../../../../../dialogs/approve-dialog/approve-dialog.component';


@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
    @Input() public post: IPost;
    @Output() public changeStatus: EventEmitter<any> = new EventEmitter<any>();

    constructor(private router: Router, public dialog: MatDialog) {

    }

    public info(): void {
        this.openDialog();
    }

    ngOnInit(): void {

    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(ApproveDialogComponent, {
            data: {
                post: this.post,
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.changeStatus.emit({ postId: this.post.id, status: 2 });
            } else if (result !== undefined) {
                this.changeStatus.emit({ postId: this.post.id, status: 3 });
            }
        });
    }
}
