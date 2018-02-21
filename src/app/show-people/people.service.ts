import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Person } from '../models/Person';
import { stringify } from 'querystring';
import { MatSnackBar } from '@angular/material';
@Injectable()
export class PeopleService {
  people: Array<Person>
  personToEdit: Person
  personToViewDetails: Person
  constructor(
    private _http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getPersonsRequest(): any {
    // `${environment.SERVER_BASE_URL}person/getAllPersons`
    return this._http.get<Person[]>(`${environment.SERVER_BASE_URL}person/getAllPersons`)
  }

  savePerson(person: Person) {
    this._http.post('person/create', person)
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

  updatePerson(person: Person) {
    //let params = new HttpParams().set('personId', person._id);
    //`${environment.SERVER_BASE_URL}person/update/${person._id}`, person
    console.log(person)
    this._http.put(`${environment.SERVER_BASE_URL}person/update/${person._id}`, person)
      .subscribe(
        success => {
          console.log('Persona actualizada con éxito')
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

  getPersonById(_id: string): Person {
    let foundPerson: Person = null
    this.people.forEach(person => {
      if(person._id === _id){
        foundPerson = person
      }
    })
    return foundPerson
  }

  deletePerson(_id: string) {
    this._http.delete(`person/delete/${_id}`)
    .subscribe(
      success => {
        this.openSnackBar('Persona eliminada con éxito', 'Ok')
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(`Persona no eliminada debido al error: ${err}`, 'Ok')
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
