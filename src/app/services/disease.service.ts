import { IDisease } from './../user/models/Disease';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiseaseService {
    private url = `${environment.url}`;

    constructor(private http: HttpClient) {

    }

    public getAllDiseases(): Observable<IDisease[]> {
        return this.http.get<IDisease[]>(this.url + '/diseases');
    }
}
