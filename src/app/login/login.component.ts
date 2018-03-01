import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private _fb: FormBuilder,
    private userService: UserService
  ) { 
    this.loginFG = this._fb.group({
      "Username": ['', Validators.required],
      "Password": ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.getUser(this.login.UserName, this.login.Password)
    .subscribe(
      success => {
        console.log(success)
      },
      err => {
        this.err = true
      }
    )
  }

}
