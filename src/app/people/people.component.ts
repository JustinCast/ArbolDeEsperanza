import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  logguedUser: User
  constructor(
    private _auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.logguedUser = JSON.parse(this._auth.getUser())
  }

}
