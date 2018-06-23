import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Health } from '../models/Health';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Expectatives } from '../models/Expectatives';


@Injectable()
export class HealthService {
  public existency: boolean = false
  constructor(
    private _http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getHealthDocs(){
    return this._http.get<Health[]>(`${environment.SERVER_BASE_URL}api/health`)
  }

  getHealthByPersonID(personID: string): Observable<Health>{
    return this._http.get<Health>(`${environment.SERVER_BASE_URL}api/health/getHealthByPersonID/${personID}`)
  }

  saveHealthDoc(doc: Health) {
    this._http.post(`${environment.SERVER_BASE_URL}api/health/saveHealthDoc`, doc)
    .subscribe(
      success => {this.openSnackBar('Documento guardado con éxito', 'Ok', 'green-snackbar')}
      ,
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

  updateHealthDoc(doc: Health) {
    this._http.put(`${environment.SERVER_BASE_URL}api/health/updateHealthDoc`, doc)
    .subscribe(
      success => {this.openSnackBar('Documento actualizado con éxito', 'Ok', 'green-snackbar')}
      ,
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

  verifyExistency(PersonID: string) {
    this._http.get(`${environment.SERVER_BASE_URL}api/health/verifyExistency/${PersonID}`)
      .subscribe(
        success => {
          console.log(success)
          if(Object.keys(success).length === 0 && success.constructor === Object)
            this.existency = false
          else
            this.existency = true
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
            this.openSnackBar(`Error con la verificación`, 'Ok', 'red-snackbar')
          }
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
