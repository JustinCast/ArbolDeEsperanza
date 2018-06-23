import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SocioEconomic } from '../models/SocioEconomic';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SocioEconomicService {
  public existency: boolean = false
  constructor(
    private _http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getSocioEconomicDocs(): any{
    return this._http.get<SocioEconomic[]>(`${environment.SERVER_BASE_URL}api/socioeconomic`)
  }

  getSocioEconomicByPersonID(personID: string): Observable<SocioEconomic>{
    return this._http.get<SocioEconomic>(`${environment.SERVER_BASE_URL}api/socioeconomic/getSocioeconomicByPersonID/${personID}`)
  }

  saveSocioEconomicDoc(doc: SocioEconomic) {
    this._http.post(`${environment.SERVER_BASE_URL}api/socioeconomic/saveSocioEconomicDoc`, doc)
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

  updateSocioEconomicDoc(doc: SocioEconomic) {
    this._http.put(`${environment.SERVER_BASE_URL}api/socioeconomic/updateSocioEconomicDoc`, doc)
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
    this._http.get<Array<any>>(`${environment.SERVER_BASE_URL}api/health/verifyExistency/${PersonID}`)
      .subscribe(
        success => {
          if(success.length === 0)
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
