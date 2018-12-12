import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPost } from '../../../../../models/Post';

@Component({
    selector: 'app-new-post-list',
    templateUrl: './new-post-list.component.html',
    styleUrls: ['./new-post-list.component.css'],
})
export class NewPostListComponent implements OnInit {
    @Input() public posts: IPost[];
    @Output() public changeStatus: EventEmitter<any> = new EventEmitter<any>();

    constructor() {

    }

    ngOnInit(): void {

    }

    public change($event) {
        this.changeStatus.emit($event);
    }
}
