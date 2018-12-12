import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPost } from '../../../models/Post';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
    public post: IPost;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private location: Location,
    ) {

    }

    public cancel(): void {
        this.location.back();
    }

    public editPost(post: IPost): void {
        this.route.params.pipe(
            switchMap((params) => {
                return this.postService.updatePost(params['id'], post);
            })
        ).subscribe((data) => {
            this.location.back();
        });
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap((params) => {
                return this.postService.getPost(params.id);
            })
        ).subscribe((post: IPost) => {
            this.post = post;
        });
    }
}
