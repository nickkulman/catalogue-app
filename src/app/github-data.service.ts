import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor() { }

  public avatar: string = 'https://avatars.githubusercontent.com/u/60517199?v=4'

  getAvatar(): string {
    return this.avatar
  }

  // getUser() {
  //
  //   https://api.github.com/users/{nickname}/
  // }

}
