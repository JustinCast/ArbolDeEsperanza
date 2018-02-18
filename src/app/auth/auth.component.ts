import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { AuthenticationService } from './authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  credentialState = false
  public title: string;
  public message: string;
  myForm: FormGroup
  constructor(
    public dialogRef: MatDialogRef<AuthComponent>,
    public authentication: AuthenticationService,
    public snackBar: MatSnackBar,
    formBuilder: FormBuilder) {
      this.myForm = formBuilder.group({
        'userNameFormControl': [null, Validators.required],
        'passwordFormControl': [null, Validators.required]
      })
  }

  ngOnInit() {
    this.title = ""
    this.message = ""
  }

  login(username: string, password: string): boolean {
    //  se llama al metodo de verificacion de los inputs

    if (!this.authentication.login(username, password)) {
      this.credentialState = false
      this.openSnackBar('Credenciales incorrectas', 'Ok')
      setTimeout(function() {
        this.message = ''
      }.bind(this), 2500);
    }else {
      this.credentialState = true
      this.openSnackBar('Inicio de sesión exitoso', 'Ok')
      this.dialogRef.close()
    }
    return true
  }

  logout(): boolean {
    this.authentication.logout();
    return false;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
