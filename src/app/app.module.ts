import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { SearchComponent } from './search/search.component';
import {ReactiveFormsModule} from "@angular/forms";

import { UserComponent } from './user/user.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {GithubDataService} from "./github-data.service";
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import {UserListService} from "./user-list.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    EditDialogComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule

  ],
  providers: [
    GithubDataService,
    UserListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
