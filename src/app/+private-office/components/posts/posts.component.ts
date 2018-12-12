import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { IPost } from '../../../models/Post';
import { Router } from '@angular/router';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
    public posts: IPost[] = [];

    constructor(public postService: PostService, private router: Router) {

    }

    ngOnInit(): void {
        this.postService.getMyPosts().subscribe((posts) => {
          this.posts = posts;
        });
    }

    public updatePost(): void {
        this.router.navigate(['posts', 'edit']);
    }

    public deletePost(postId): void {
        this.postService.deletePost(postId).subscribe((data) => {
            this.posts = this.posts.filter((post: IPost, index, arr) => {
                return post.id !== postId;
            });
        });
    }
}
