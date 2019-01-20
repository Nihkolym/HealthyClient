import { IPersonalReccomandation } from "./../models/PersonalRecommandation";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { IUser } from "../models/User";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  private url: string = environment.url;

  constructor(private http: HttpClient) {}

  public getUser(): Observable<IUser> {
    return this.http.get<IUser>(this.url + "/users/me");
  }

  public getPersonalRecommandation() {
    return this.http.get<IPersonalReccomandation>(this.url + "/users/myRec");
  }

  public getUserRecommandation(id) {
    return this.http.get<IPersonalReccomandation>(this.url + "/users/userRec/" + id);
  }

  public updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(this.url + `/users/${user.id}`, {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      age: user.age,
      idOfDisease: user.idOfDisease
    });
  }

  public updateUserRole(userId: number, role): Observable<IUser> {
    return this.http.put<IUser>(this.url + `/users/${userId}/changeRole`, {
      role
    });
  }

  public changePassword(userId: number, newPass: string, oldPass: string): Observable<IUser> {
    return this.http.put<IUser>(this.url + `/users/${userId}/changePassword`, {
      newPass,
      oldPass,
    });
  }

  public getAllUsersWithStatistic(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + "/users/statistic");
  }

  public getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + "/users");
  }

  public deleteUser(id): Observable<void> {
    return this.http.delete<void>(this.url + "/users" + `/${id}`);
  }
}
