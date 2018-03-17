import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class LoginComponent implements OnInit, OnDestroy {
  actualYear = (new Date()).getFullYear()
  loginFG: FormGroup
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
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ".backg { background-image: url('../../assets/blurred.jpg'); }";
    document.getElementsByTagName('head')[0].appendChild(style);
    document.querySelector('body').classList.add('backg');
    if(this._auth.isLoggedIn()){
      this.logguedUser = JSON.parse(this._auth.getUser())
      this._router.navigate(['/home'])
    }
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('backg');
  }

  onSubmit(){
    this.userService.getUser(this.login.UserName, this.login.Password)
    .subscribe(
      success => {
        this._auth.login(success.user)
        this._router.navigate(['/home'])
      },
      err => {
        this.userService.openSnackBar("Usuario o contraseña incorrecta", 'Ok')
      }
    )
  }
}
