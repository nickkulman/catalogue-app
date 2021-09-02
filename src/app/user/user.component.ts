import {Component, Input, OnInit} from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "../edit-dialog/edit-dialog.component";
import {User, UserListService} from '../user-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user!: User;

  constructor(public dialog: MatDialog, public userListService: UserListService) {}

  openDialog(): void {
    let dialog = this.dialog.open(EditDialogComponent, {data: {...this.user}});

    dialog.afterClosed()
      .subscribe(user => {
        if (user) {
          this.userListService.updateUser(user);
        }
      });
  }

  removeUser(): void {
    this.userListService.removeUser(this.user);
  }

  ngOnInit(): void {  }
}
