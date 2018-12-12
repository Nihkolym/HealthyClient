import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
    selector: 'app-snack-bar',
    templateUrl: './snackbar.component.html',
    styles: [],
})
export class SnackBarComponent {
    public task;
    public name;

    constructor(public snackBar: MatSnackBarRef<SnackBarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) {
        this.name = data.name;
        this.task = data.task;
    }

    public edit() {
        this.snackBar.dismiss();
    }
}
