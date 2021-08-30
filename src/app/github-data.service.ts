import { Injectable } from '@angular/core';
import {User} from "./app.component";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  user!: User;

  constructor(private http: HttpClient) { }

  public avatar: string = 'https://avatars.githubusercontent.com/u/60517199?v=4'

  getAvatar(): any {

    // return this.avatar

    this.http.get('https://api.github.com/users/')
      .subscribe((data: any) => this.user.login == data.login ? this.avatar = data['avatar_url'] : alert('Такой аккаунт не зарегистрирован')
      )
  }

}
