import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { IUser } from '../../user/user';

@Injectable()
export class AuthenticationService {

    private url: string = environment.userUrl;

    constructor(private http: HttpClient) {

    }

    public signUp(model: IUser) {
        return this.http.post<IUser>(this.url, model);
    }

    public logIn(model: IUser) {
        return this.http.get<IUser>(this.url);
    }

}
