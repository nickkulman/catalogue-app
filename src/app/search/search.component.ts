import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {GithubDataService} from '../github-data.service';
import {MatDialog} from "@angular/material/dialog";
import {MessageComponent} from "../message/message.component";
import {User, UserListService} from '../user-list.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user!: User;

  email!: FormControl;
  login!: FormControl;
  form!: FormGroup;

  constructor(public dataService: GithubDataService, public userListService: UserListService, public message: MatDialog) {}

  ngOnInit(){
    this.email = new FormControl('', [
      Validators.email
    ]);

    this.login = new FormControl('', [
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


  addUser() {
    if (this.user.login.trim()) {
      this.dataService.getGithubUser(this.user.login).subscribe(user => {
          if (user) {
            this.userListService.addUser({...this.user, avatar: user.avatar});
          }

          this.form.reset();
          for (const control in this.form.controls) {
            this.form.controls[control].setErrors(null);
          }
        },
        () => this.openMessage(`Пользователь ${this.user.login} не найден`));
    }
  }


  openMessage(warning: string) {
    this.message.open(MessageComponent, {data: {warning}});
  }

}

