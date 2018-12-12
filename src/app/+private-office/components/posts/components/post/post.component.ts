import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../../../../models/Post';
import { Router } from '@angular/router';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
    @Input() public post: IPost;
    @Output() public deletePost: EventEmitter<number> = new EventEmitter<number>();

    constructor(private router: Router) {

    }

    delete() {
        this.deletePost.emit(this.post.id);
    }

    update() {
        this.router.navigate(['posts', 'edit', this.post.id]);
    }

    ngOnInit(): void {
    }
}
