import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {User} from "../app.component";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "../edit-dialog/edit-dialog.component";

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

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialog = this.dialog.open(EditDialogComponent);
    dialog.afterClosed()
      .subscribe(user => {
        if (true) {
          // edit user
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });
  }

  removeUser() {
    this.onRemove.emit(this.user)
  }

  // editUser() {
  //   this.onEdit.emit(this.user)
  // }


  ngOnInit(): void {
  }


}
