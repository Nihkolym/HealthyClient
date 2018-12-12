import { Injectable } from '@angular/core';
import { NotificationComponent } from '../notification.component';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class NotificationService {
    constructor(private snackBar: MatSnackBar) { }

    public notify(message: string) {
        this.snackBar.openFromComponent(NotificationComponent, {
            verticalPosition: 'bottom',
            panelClass: ['bar'],
            data: {
                message
            },
            duration: 2000,
          });
    }
}
