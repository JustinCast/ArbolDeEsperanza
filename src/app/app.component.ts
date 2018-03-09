import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { User } from './models/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  logguedUser: User
  constructor(
    public _authentication: AuthenticationService,
    public router: Router,
    private _auth: AuthenticationService
  ){}

  ngOnInit() {
    this.logguedUser = JSON.parse(this._auth.getUser())
  }
}
