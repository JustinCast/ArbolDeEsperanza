import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { User } from './models/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logguedUser: User
  constructor(
    public _authentication: AuthenticationService,
    public router: Router
  ){}

  public set User(user: User) {
    this.logguedUser = user
  }
}
