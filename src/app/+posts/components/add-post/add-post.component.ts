import { IPost } from './../../../user/models/Post';
import { PostService } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
    constructor(private postService: PostService, private router: Router) {

    }

    public addPost(post: IPost): void {
      post.status = 1;
        this.postService.addPost(post).subscribe(() => {
            this.router.navigate(['profile']);
        });
    }

    ngOnInit(): void { }
}
