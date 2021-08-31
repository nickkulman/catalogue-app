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
    {avatar: 'https://miro.medium.com/max/6000/1*Vm3j-OgNJHGvHccYpQnHYw.png', login: 'user1_nickname', email: 'user1@github.com'}
  ];

  updateUsers(user: User) {
    this.users.unshift(user)
  }

  removeUser(index: number) {
    this.users.splice(index,1)
  }



}
