import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../app.component";

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

  constructor() {}

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

  submit() {

  }


  addUser() {
    if (this.user.email.trim() && this.user.login.trim()) {


      this.onAdd.emit({...this.user, avatar: 'SomeUser'});
      this.form.reset();
    }
  }

}
