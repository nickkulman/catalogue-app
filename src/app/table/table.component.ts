import { Component } from '@angular/core';

export interface PeriodicElement {
  avatar: string;
  login: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {avatar: '********', login: '********', email: '********'},
  {avatar: '******', login: '********', email: '********'},
  {avatar: '******', login: '********', email: '********'},
  {avatar: '******', login: '********', email: '********'},
  {avatar: '********', login: '********', email: '********'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['avatar', 'login', 'email'];
  dataSource = ELEMENT_DATA;

}
