import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from "../app.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Output() onAdd: EventEmitter<User> = new EventEmitter<User>()

  avatar =''
  email =''
  login = ''

  constructor() {}

  ngOnInit(){
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  addUser() {
    if (this.email.trim() && this.login.trim()) {
      let user: User = {
        avatar: 'someUser',
        login: this.login,
        email: this.email,
      }

      this.onAdd.emit(user)

      this.email = this.login = ''
    }
  }

}
