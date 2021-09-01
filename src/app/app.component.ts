import {Component, OnInit} from '@angular/core';
import {UserListService} from "./user-list.service";
import {User} from "./user-list.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public userListService: UserListService) {}

  user!: User;

  ngOnInit() {
  }

  updateUsers(user: User) {
    this.userListService.updateUsers(user)
  }

  removeUser(user: User) {
    this.userListService.removeUser(user)
  }

}
