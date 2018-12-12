import { UserService } from './../../services/user.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    @Input() public user: IUser;
    @Output() public remove: EventEmitter<number> = new EventEmitter();

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {

    }

    public onRemove() {
      this.remove.emit(this.user.id);
    }
}
