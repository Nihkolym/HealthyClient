import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { IPost } from '../../../models/Post';

@Component({
    selector: 'app-new-posts',
    templateUrl: './new-posts.component.html',
    styleUrls: ['./new-posts.component.css'],
})
export class NewPostsComponent implements OnInit {
    public posts: IPost[] = [];

    constructor(
        private postService: PostService,
    ) { }

    ngOnInit(): void {
      this.postService.getWaitingPosts().subscribe((posts) => {
        this.posts = posts;
        console.log(posts);
      });
    }

    public approve($event) {
      this.postService.updatePost($event.postId, { status: $event.status }).subscribe(() => {
        this.posts = this.posts.filter((post) => post.id !== $event.postId);
      });
    }
}
