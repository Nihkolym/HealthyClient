import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styles: [],
})
export class NotificationComponent {
    public message;

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
        this.message = data.message;
    }
}
