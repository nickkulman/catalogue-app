import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../app.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public user: User) { }



  ngOnInit(): void {
  }

}
