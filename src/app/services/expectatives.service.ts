import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from '@angular/material';
import { Expectatives } from '../models/Expectatives';
import { environment } from '../../environments/environment';
import { Person } from '../models/Person';
import { Observable } from 'rxjs';
@Injectable()
export class ExpectativesService {
  expectatives: Array<Expectatives>

  constructor(
    private _http: HttpClient,
    private snackBar: MatSnackBar
  ) { }


  getExpectatives() {
    this._http.get<Expectatives[]>(`${environment.SERVER_BASE_URL}api/expectative`)
      .subscribe(
        success => {
          this.expectatives = success
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
            this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
          }
        }
      )
  }

  getExpectativeByPersonID(personID: string): Observable<Expectatives>{
    return this._http.get<Expectatives>(`${environment.SERVER_BASE_URL}api/expectative/getExpectativeByPersonID/${personID}`)
  }

  getPeopleWithoutExpectativeDoc(): Observable<Person[]> {
    return this._http.get<Person[]>(`${environment.SERVER_BASE_URL}api/getPeopleWithoutExpectativeDoc`)
  }

  saveExpectative(expectative: Expectatives) {
    this._http.post(`${environment.SERVER_BASE_URL}api/expectative/saveExpectativeDoc`, expectative)
      .subscribe(
        success => {this.openSnackBar('Documento guardado con éxito', 'Ok', 'green-snackbar')}
      ),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
          this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
        }
      }
  }

  updateExpectative(expectative: Expectatives) {
    this._http.put(`${environment.SERVER_BASE_URL}api/expectative/updateExpectativeDoc/${expectative._id}`, expectative)
      .subscribe(
        success => {this.openSnackBar('Documento actualizado con éxito', 'Ok', 'green-snackbar')}
      ),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
          this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
        }
      }
  }

  deleteExpectative(_id: string) {
    this._http.delete(`${environment.SERVER_BASE_URL}api/expectative/deleteExpectativeDoc/${_id}`)
      .subscribe(
        success => {this.openSnackBar('Documento eliminado con éxito', 'Ok', 'green-snackbar')}
      ),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
          this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
        }
      }
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }

}
