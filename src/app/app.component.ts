import {Component} from '@angular/core';
import {UserListService} from "./user-list.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public userListService: UserListService) {}

}
