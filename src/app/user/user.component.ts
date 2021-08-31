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


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialog = this.dialog.open(EditDialogComponent, {data: {...this.user}});

    dialog.afterClosed()
      .subscribe(user => {
        if (user) {
          this.user = {...this.user, ...user};
        }
      });
  }

  removeUser(): void {
    this.onRemove.emit(this.user);
  }

  ngOnInit(): void {  }
}
