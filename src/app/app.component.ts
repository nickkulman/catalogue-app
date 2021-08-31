import { Component } from '@angular/core';
import {MessageComponent} from "./message/message.component";
import {MatDialog} from "@angular/material/dialog";

export interface User {
  avatar?: any
  login: string
  email: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public message: MatDialog) {}

  users: User[] = [
    {avatar: './assets/github-default-icon.png', login: 'user1_nickname', email: 'user1@github.com'}
  ];

  user!: User;

  updateUsers(user: User) {


    for (let i = 0; i < this.users.length; i++) {
      if (user.login == this.users[i].login) {
        console.log('Пользователь уже находится в каталоге');
        this.openMessage(`Пользователь ${user.login} уже находится в каталоге`);
        return;
      }
    }

    this.users.unshift(user);
    this.openMessage(`Пользователь ${user.login} добавлен`);
  }


  openMessage(warning: string) {
    this.message.open(MessageComponent, {data: {warning}});
  }

  removeUser(index: number) {
    this.users.splice(index,1)
  }


}
