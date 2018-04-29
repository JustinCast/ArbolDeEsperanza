import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { stringify } from 'querystring';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { YesOrNoService } from '../../modals/yes-or-no/yes-or-no.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  checked: boolean = false
  OldPassword: string
  NewPassword: string
  NewPasswordConfirm: string
  successVerification: boolean = false
  passwordCoincidence: boolean = false
  usersRole = [
    'Admin',
    'Editor',
    'User'
  ]
  user: User
  userFG: FormGroup
  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private _location: Location,
    public snackBar: MatSnackBar,
    public yesOrNoDialog: YesOrNoService,
  ) { 
    this.userFG = this._fb.group({
      "UserName": ['', Validators.required],
      "OldPassword": ['', Validators.required],
      "NewPassword": ['', Validators.required],
      "NewPasswordConfirm": ['', Validators.required],
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
    if(this.OldPassword !== undefined && this.NewPassword !== undefined){
      if(this.passwordCoincidence){
        this.yesOrNoDialog.confirm("Editar persona", "Seguro que desea editar la persona")
        .subscribe(
          yes => {
            if(yes) {
              this.user.Password = this.NewPassword
              this.userService.updateUser(this.user)
              this.backClicked()
            }
          })
      }
      else
        this.openSnackBar('La confirmación de contraseña no coincide', '', 'red-snackbar')

    }
    else
      this.openSnackBar('Por favor complete los campos', '', 'red-snackbar')
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

  verifyingPassword(event: any) {
    if(String(event.target.value) === this.NewPassword){
      this.passwordCoincidence = true
      this.openSnackBar('Las contraseñas coinciden', '', 'green-snackbar')
    }
    else
      this.openSnackBar('La confirmación de contraseña no coincide', '', 'red-snackbar')
  }

  onKey(event: any) {
    console.log(this.user.Password)
    this.userService.getUser(this.user.UserName, String(event.target.value))
    .subscribe(
      success => {
        console.log(success)
        this.successVerification = true
        this.openSnackBar("Contraseña correcta", '', 'green-snackbar')
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
        this.successVerification = false
        this.openSnackBar("Contraseña incorrecta", '', 'red-snackbar')
      }
    )
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }

}
