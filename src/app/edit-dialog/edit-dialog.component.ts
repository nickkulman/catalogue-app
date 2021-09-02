import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../user-list.service";


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})

export class EditDialogComponent implements OnInit {

  email!: FormControl;
  login!: FormControl;
  form!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public user: User) {
  }

  ngOnInit(): void {
    this.email = new FormControl(this.user.email, [
      Validators.email
    ]);

    this.login = new FormControl(this.user.login, [
      Validators.required
    ]);

    this.form = new FormGroup({
      email: this.email,
      login: this.login
    });

    this.form.valueChanges.subscribe((value) => {
      this.user = value;
    });
  }
}


