import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { YesOrNoService } from '../../modals/yes-or-no/yes-or-no.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {
  usersRole = [
    'Admin',
    'Editor',
    'Usuario'
  ]
  userFG: FormGroup
  user: User
  constructor(
    public yesOrNoDialog: YesOrNoService,
    public snackBar: MatSnackBar,
    private _fb: FormBuilder,
    public _userService: UserService
  ) { 
    this.userFG = this._fb.group({
      "UserName": ['', Validators.required],
      "Password": ['', Validators.required],
      "Role": ['', Validators.required]
    })
  }

  ngOnInit() {
    this.user = new User("", "", "")
  }

  resetForm() {
    if(this.userFG !== undefined)
      this.userFG.reset()
  }

  saveUser() {
    this._userService.saveUser(this.user)
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
