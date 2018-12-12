import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/User';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    @Input() public users: IUser[];
    @Output() public remove: EventEmitter<number> = new EventEmitter<number>();

    public onRemove($event) {
        this.remove.emit($event);
    }
}
