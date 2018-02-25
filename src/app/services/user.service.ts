import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { stringify } from 'querystring';
import { MatSnackBar } from '@angular/material';
@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getUsers(){
    // `${environment.SERVER_BASE_URL}person/getAllUsers`
    this._http.get<User[]>(`${environment.SERVER_BASE_URL}person/getAllUsers`)
  }

  saveUser(user: User) {
    this._http.post('person/createUser', user)
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
            console.log(`Backend returned code ${err.status}, body was: ${stringify(err.error)}`);
          }
        }
      )
  }

  updateUser(user: User) {
    //let params = new HttpParams().set('personId', person._id);
    //`${environment.SERVER_BASE_URL}person/update/${person._id}`, person
    console.log(user)
    this._http.put(`person/updateUser/${user._id}`, user)
      .subscribe(
        success => {
          console.log('Usuario actualizado con éxito')
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      )
  }

  deleteUser(_id: string) {
    this._http.delete(`person/deleteUser/${_id}`)
    .subscribe(
      success => {
        this.openSnackBar('Persona eliminada con éxito', 'Ok')
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(`Usuario no eliminado debido al error: ${err}`, 'Ok')
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
