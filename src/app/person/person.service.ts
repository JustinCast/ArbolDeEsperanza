import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Person } from '../models/Person';
@Injectable()
export class PersonService {

  constructor(private _http: HttpClient) { }

  getPersonsRequest() {
    this._http.get<Person>(`${environment.SERVER_BASE_URL}person/getAllPersons`)
      .subscribe(
        data => {
          console.log(data)
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

}
