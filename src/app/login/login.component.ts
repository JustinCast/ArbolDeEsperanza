import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  actualYear = (new Date()).getFullYear()
  loginFG: FormGroup
  err: boolean = false
  login: any = {}
  logguedUser: User
  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private _auth: AuthenticationService
  ) { 
    this.loginFG = this._fb.group({
      "Username": ['', Validators.required],
      "Password": ['', Validators.required]
    })
  }

  ngOnInit() {
    if(this._auth.isLoggedIn())
      this.logguedUser = JSON.parse(this._auth.getUser())
  }

  onSubmit(){
    this.userService.getUser(this.login.UserName, this.login.Password)
    .subscribe(
      success => {
        this._auth.login(success.user)
      },
      err => {
        this.err = true
      }
    )
  }

}
