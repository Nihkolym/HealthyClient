import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MyErrorStateMatcher } from '../../../models/errors/error.matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPost } from '../../../models/Post';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
    private _post: IPost;

    @Input() public set post(model: IPost) {
        if (model) {
            this.postForm.patchValue(model);
        }
    }

    public get post() {
        this._post = {
            title: this.postForm.controls['title'].value,
            description: this.postForm.controls['description'].value,
        };

        return this._post;
    }

    @Output() public sub: EventEmitter<IPost> = new EventEmitter<IPost>();


    public postForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.maxLength(255)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    });

    public matcher = new MyErrorStateMatcher();

    constructor() {
    }

    ngOnInit(): void {

    }

    public send() {
        this.sub.emit(this.post);
    }
}
