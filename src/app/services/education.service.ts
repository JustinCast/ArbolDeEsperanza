import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Education } from '../models/Education';
import { environment } from '../../environments/environment';
import { MatSnackBar, SELECT_PANEL_VIEWPORT_PADDING } from '@angular/material';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class EducationService {

  constructor(
    private _http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getEducationDocs(): any{
    return this._http.get<Education[]>(`${environment.SERVER_BASE_URL}api/education`)
  }

  getEducationByPersonID(personID: string): Observable<Education>{
    return this._http.get<Education>(`${environment.SERVER_BASE_URL}api/education/getEducationByPersonID/${personID}}`)
  }

  saveEducationDoc(doc: Education) {
    this._http.post(`${environment.SERVER_BASE_URL}api/education/saveEducationDoc`, doc)
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

  updateEducationDoc(doc: Education) {
    this._http.put(`${environment.SERVER_BASE_URL}`, doc)
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }

}
