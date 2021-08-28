import { Component } from '@angular/core';

export interface UserList {
  avatar: string;
  login: string;
  email: string;
}

const ELEMENT_DATA: UserList[] = [
  {avatar: '********', login: '********', email: '********'},
  {avatar: '******', login: '********', email: '********'},
  {avatar: '******', login: '********', email: '********'},
  {avatar: '******', login: '********', email: '********'},
  {avatar: '********', login: '********', email: '********'},
];


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  displayedColumns: string[] = ['avatar', 'login', 'email'];
  dataSource = ELEMENT_DATA;

}
