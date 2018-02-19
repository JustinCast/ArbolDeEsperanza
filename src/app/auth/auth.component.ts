import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { AuthenticationService } from './authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loading = false
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

  login(username: string, password: string) {
    //  se llama al metodo de verificacion de los inputs
    this.loading = true
    this.authentication.login(username, password).subscribe(
      success => {
        if(success.isMatch === true){
          localStorage.setItem('username', username)
          this.openSnackBar('Inicio de sesión exitoso', 'Ok')
          this.dialogRef.close()
        }else{
          this.loading = false
          this.openSnackBar('Credenciales incorrectas', 'Ok')
          setTimeout(function() {
            this.message = ''
          }.bind(this), 2500);
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`);
        }
      }
    )
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
