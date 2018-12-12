import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { IPost } from '../../../models/Post';

@Component({
    selector: 'app-all-posts',
    templateUrl: './all-posts.component.html',
    styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent implements OnInit {
    public posts: IPost[] = [];

    constructor(private postService: PostService) {

    }

    public deletePost(postId): void {
        this.postService.deletePost(postId).subscribe((data) => {
            this.posts = this.posts.filter((post: IPost, index, arr) => {
                return post.id !== postId;
            });
        });
    }

    public getAllPosts(): void {
        this.postService.getApprovedPosts().subscribe((posts: IPost[]) => {
          console.log(posts);
            this.posts = posts;
        });
    }

    ngOnInit(): void {
        this.getAllPosts();
    }
}
