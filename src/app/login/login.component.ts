import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';
import { Router } from "@angular/router";
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
    public _auth: AuthenticationService,
    private _router: Router
  ){ 
    this.loginFG = this._fb.group({
      "Username": ['', Validators.required],
      "Password": ['', Validators.required]
    })
  }

  ngOnInit() {
    if(this._auth.isLoggedIn()){
      this.logguedUser = JSON.parse(this._auth.getUser())
      this._router.navigate(['/home'])
    }
  }

  onSubmit(){
    this.userService.getUser(this.login.UserName, this.login.Password)
    .subscribe(
      success => {
        this._auth.login(success.user)
        this._router.navigate(['/home'])
      },
      err => {
        this.err = true
      }
    )
  }

}
