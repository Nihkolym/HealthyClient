import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPost } from '../../../../../models/Post';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
    @Input() public posts: IPost[];
    @Output() public deletePost: EventEmitter<number> = new EventEmitter<number>();

    constructor() {

    }

    public delete(postId): void {
        this.deletePost.emit(postId);
    }

    ngOnInit(): void {

    }
}
