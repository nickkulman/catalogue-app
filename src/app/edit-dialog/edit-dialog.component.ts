import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import {User} from "../app.component";


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})

export class EditDialogComponent implements OnInit {

  @Input() user!: User
  @Output() onChange: EventEmitter<User> = new EventEmitter<User>()

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>) {
  }

  ngOnInit(): void {
  }

  confirmChanges() {

      this.onChange.emit({...this.user, avatar: 'SomeUser'}); //здесь логика по изменению

      this.dialogRef.close(this.user);


  }
}


