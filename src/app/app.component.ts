import { Component } from '@angular/core';

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
  users: User[] = [
    {avatar: 'user1', login: 'user1_nickname', email: 'user1@github.com'},
    {avatar: 'user2', login: 'user2_nickname', email: 'user2@github.com'}
  ]

  updateUsers(user: User) {
    this.users.unshift(user)
  }

  editUser(index: number) {
    // this.users = this.users[index];
    // this.removeUser(index);
  }

  removeUser(index: number) {
    this.users.splice(index,1)
  }

  // не работает корректно, как правильно написать этот метод? чтобы именно этот индекс удалить?

  // removeUser(login: string) {
  //   this.users = this.users.filter( u => u.login !== login)
  // }
}
