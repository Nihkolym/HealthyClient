import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IPost } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = `${environment.url}`;

  constructor(private http: HttpClient) {}

  public getMyPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url + '/posts/my');
  }

  public addPost(model) {
    return this.http.post(this.url + '/posts', model);
  }

  public getPost(id) {
    return this.http.get(this.url + '/posts/' + id);
  }

  public updatePost(id, model) {
    return this.http.put(this.url + '/posts/' + id, model);
  }

  public deletePost(id) {
    return this.http.delete(this.url + '/posts/' + id);
  }

  public getApprovedPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url + '/posts/approved');
  }

  public getWaitingPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url + '/posts/waiting');
  }
}
