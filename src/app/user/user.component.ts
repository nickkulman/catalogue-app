import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {User} from "../app.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user!: User
  @Output() onRemove = new EventEmitter()
  @Output() onEdit = new EventEmitter()

  // @Output() user: User

  removeUser() {
    this.onRemove.emit(this.user)
  }

  editUser() {
    this.onEdit.emit(this.user)
  }

  constructor() { }

  ngOnInit(): void {
  }


}
