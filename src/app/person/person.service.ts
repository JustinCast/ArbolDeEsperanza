import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
@Injectable()
export class PersonService {

  constructor(private _http: HttpClient) { }

  getPersonsRequest() {
    this._http.get(`${environment.SERVER_BASE_URL}person/getAllPersons`)
      .subscribe(
        data => {
          console.log(data)
        },
        err => {
          console.log(err)
        }
      )
  }

}
