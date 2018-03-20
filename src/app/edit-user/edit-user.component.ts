import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { stringify } from 'querystring';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  checked: boolean = false
  OldPassword: string = ''
  usersRole = [
    'Admin',
    'Editor',
    'NormalUser'
  ]
  user: User
  userFG: FormGroup
  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private _location: Location,
    public snackBar: MatSnackBar
  ) { 
    this.userFG = this._fb.group({
      "UserName": ['', Validators.required],
      "OldPassword": [''],
      "NewPassword": [''],
      "NewPasswordConfirm": [''],
      "Role": ['', Validators.required]
    })
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('editUser'))
  }

  backClicked() {
    this._location.back();
  }

  updateUser(){
    this.userService.updateUser(this.user)
    this.snackBar.open("Usuario editado correctamente", "Ok", {
      duration: 2000,
      extraClasses: ['green-snackbar']
    });
  }

  resetForm() {
    if(this.userFG !== undefined){
      this.userFG.reset()
      this.backClicked()
    }
  }
  checkedClick(){
    console.log(this.checked)
  }

  onKey(event: any) {
    console.log(this.user.Password)
    this.userService.getUser(this.user.UserName, String(event.target.value))
    .subscribe(
      success => {
        console.log(success)
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was:  ${JSON.stringify(err.error)}`);
        }
      }
    )
  }

}
