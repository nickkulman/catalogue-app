import {Injectable} from '@angular/core';
import {MessageComponent} from "./message/message.component";
import {MatDialog} from "@angular/material/dialog";
import {BehaviorSubject} from "rxjs";

export interface User {
  avatar?: string;
  login: string;
  email: string;
}

const SAVED_USERS = 'savedUsers';

@Injectable({
  providedIn: 'root'
})
export class UserListService{

  constructor(public message: MatDialog) {
    const savedUsers = sessionStorage.getItem(SAVED_USERS);
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
      this.usersSubject$.next(this.users);
    } else {
      sessionStorage.setItem(SAVED_USERS, JSON.stringify(this.users));
    }
  }

  private users: User[] = [
    {avatar: './assets/github-default-icon.png', login: 'user1_nickname', email: 'user1@github.com'}
  ];

  public usersSubject$ = new BehaviorSubject<User[]>(this.users);

  addUser(user: User) {

    for (let i = 0; i < this.users.length; i++) {
      if (user.login === this.users[i].login) {
        this.openMessage(`Пользователь ${user.login} уже находится в каталоге`);
        return;
      }
    }

    this.users.push(user);
    this.completeUpdate();
    this.openMessage(`Пользователь ${user.login} добавлен`);
  }

  updateUser(user: User) {

    for (let i = 0; i < this.users.length; i++) {
      if (user.login === this.users[i].login) {
        this.users[i].email = user.email;
        break;
      }
    }

    this.completeUpdate();
  }


  openMessage(warning: string) {
    this.message.open(MessageComponent, {data: {warning}});
  }

  removeUser(user: User) {
    const index = this.users.findIndex(item => item.login === user.login);
    this.users.splice(index,1);
    this.completeUpdate();
  }

  completeUpdate() {
    sessionStorage.setItem(SAVED_USERS, JSON.stringify(this.users));
    this.usersSubject$.next(this.users);
  }

}
