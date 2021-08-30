import { Injectable } from '@angular/core';
import {User} from "./app.component";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor(private http: HttpClient) { }

  public defaultAvatar = 'https://avatars.githubusercontent.com/u/60517199?v=4';

  getGithubUser(login: string): Observable<any> {

    return this.http.get(`https://api.github.com/users/${login}`)
      .pipe(
        map((data: any) => {
          if (!data.login) {
            return null;
          }
          return {login: data.login, avatar: (data.avatar_url || this.defaultAvatar)};
        })
      );
  }
}

