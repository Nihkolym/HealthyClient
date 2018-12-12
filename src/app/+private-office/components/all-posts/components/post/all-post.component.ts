import { Role } from './../../../../../models/Role';
import { RoleService } from './../../../../../+authentication/services/role.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../../../../models/Post';
import { Router } from '@angular/router';


@Component({
    selector: 'app-all-post',
    templateUrl: './all-post.component.html',
    styleUrls: ['./all-post.component.css'],
})
export class AllPostComponent implements OnInit {
    @Input() public post: IPost;
    @Output() public deletePost: EventEmitter<number> = new EventEmitter<number>();

    public Role = Role;
    public role;

    constructor(private router: Router, private roleService: RoleService) {
      this.role = roleService.Role;
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
