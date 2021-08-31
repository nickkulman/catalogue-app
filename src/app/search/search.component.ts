import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../app.component";
import {GithubDataService} from '../github-data.service';
import {MatDialog} from "@angular/material/dialog";
import {MessageComponent} from "../message/message.component";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onAdd: EventEmitter<User> = new EventEmitter<User>()


  user!: User;

  email!: FormControl;
  login!: FormControl;
  form!: FormGroup;

  @Input() users!: User[];
  error: any;


  constructor(public dataService: GithubDataService, public message: MatDialog) {}

  ngOnInit(){
    this.email = new FormControl('', [
      Validators.required,
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
    if (this.user.email.trim() && this.user.login.trim()) {
      this.dataService.getGithubUser(this.user.login).subscribe(user => {
        if (user) {

          this.onAdd.emit({...this.user, avatar: user.avatar});
          // this.openMessage(`Пользователь ${this.user.login} добавлен`);
        }

        this.form.reset();
      },
        error => this.openMessage(`Пользователь ${this.user.login} не найден`));
    }
  }


  openMessage(warning: string) {
    this.message.open(MessageComponent, {data: {warning}});
  }

}
