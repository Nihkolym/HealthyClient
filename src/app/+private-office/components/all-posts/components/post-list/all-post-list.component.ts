import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPost } from '../../../../../models/Post';

@Component({
    selector: 'app-all-post-list',
    templateUrl: './all-post-list.component.html',
    styleUrls: ['./all-post-list.component.css'],
})
export class AllPostListComponent implements OnInit {
    @Input() public posts: IPost[];
    @Output() public deletePost: EventEmitter<number> = new EventEmitter<number>();

    constructor() {

    }

    public delete(postId: number): void {
        this.deletePost.emit(postId);
    }

    ngOnInit(): void {

    }
}
