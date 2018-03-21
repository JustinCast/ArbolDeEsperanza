import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { stringify } from 'querystring';
import { MatSnackBar } from '@angular/material';
@Injectable()
export class UserService {
  users: Array<User>
  constructor(
    private _http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getUsers(): any{
    // `${environment.SERVER_BASE_URL}person/getAllUsers`
    return this._http.get<User[]>(`person/user/getAllUsers`)
  }
  getUser(username: string, comparePassword: string): any{
    // `${environment.SERVER_BASE_URL}person/getAllUsers`
    // let params = new HttpParams();
    // params = params.append('username', username )
    // params = params.append('password', comparePassword )
    // console.log(params)
    return this._http.get<any>(`person/user/getUser/${username}/${comparePassword}`)
  }

  saveUser(user: User) {
    this._http.post(`person/user/createUser`, user)
      .subscribe(
        success => {
          console.log(success)
          this.openSnackBar('Usuario actualizado con éxito', 'Ok', 'green-snackbar')
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${stringify(err.error)}`)
            this.openSnackBar(`Usuario no eliminado debido al error: ${err}`, 'Ok', 'red-snackbar')
          }
        }
      )
  }

  updateUser(user: User) {
    //let params = new HttpParams().set('personId', person._id);
    //`${environment.SERVER_BASE_URL}person/update/${person._id}`, person
    console.log(user)
    this._http.put(`person/user/updateUser/${user._id}`, user)
      .subscribe(
        success => {
          console.log('Usuario actualizado con éxito')
          this.openSnackBar('Usuario actualizado con éxito', 'Ok', 'green-snackbar')
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
            this.openSnackBar('Usuario no actualizado', 'Ok', 'red-snackbar')
          } else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            this.openSnackBar(`Usuario no eliminado debido al error: ${err}`, 'Ok', 'red-snackbar')
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      )
  }

  deleteUser(_id: string) {
    this._http.delete(`person/user/deleteUser/${_id}`)
    .subscribe(
      success => {
        this.openSnackBar('Usuario eliminado con éxito', 'Ok', 'green-snackbar')
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(`Usuario no eliminado debido al error: ${err}`, 'Ok', 'red-snackbar')
      }
    )
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open("Usuario editado correctamente", "Ok", {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }

}

