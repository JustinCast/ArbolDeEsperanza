import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Health } from '../models/Health';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Expectatives } from '../models/Expectatives';


@Injectable()
export class HealthService {

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


  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }

}
