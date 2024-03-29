import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Person } from "../models/Person";
import { stringify } from "querystring";
import { MatSnackBar } from "@angular/material";
import { Observable } from "rxjs";
@Injectable()
export class PeopleService {
  people: Array<Person>;
  personToEdit: Person;
  personToViewDetails: Person;
  constructor(private _http: HttpClient, private snackBar: MatSnackBar) {}

  getPeopleRequest(): Observable<Person[]> {
    // `${environment.SERVER_BASE_URL}person/getAllPersons`
    return this._http.get<Person[]>(`${environment.SERVER_BASE_URL}api/getAllPersons`);
  }

  savePerson(person: Person) {
    this._http.post(`${environment.SERVER_BASE_URL}api/create`, person).subscribe(
      success => {
        console.log(success);
        this.openSnackBar("Persona guardada con éxito", "Ok", "green-snackbar");
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log("An error occurred:", err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(
            `Backend returned code ${err.status}, body was: ${JSON.stringify(
              err.error
            )}`
          );
          this.openSnackBar(
            `Persona no guardada debido al error: ${err}`,
            "Ok",
            "red-snackbar"
          );
        }
      }
    );
  }

  updatePerson(person: Person) {
    //let params = new HttpParams().set('personId', person._id);
    //`${environment.SERVER_BASE_URL}person/update/${person._id}`, person
    console.log(person);
    this._http.put(`${environment.SERVER_BASE_URL}api/update/${person._id}`, person).subscribe(
      success => {
        console.log("Persona actualizada con éxito");
        this.openSnackBar(
          "Persona actualizada con éxito",
          "Ok",
          "green-snackbar"
        );
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log("An error occurred:", err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(
            `Backend returned code ${err.status}, body was: ${err.error}`
          );
          this.openSnackBar(
            `Persona no eliminada debido al error: ${err}`,
            "Ok",
            "red-snackbar"
          );
        }
      }
    );
  }

  getPersonById(_id: string): Person {
    let foundPerson: Person = null;
    this.people.forEach(person => {
      if (person._id === _id) {
        foundPerson = person;
      }
    });
    return foundPerson;
  }

  getIndexByPersonById(_id: string): number {
    let index: number = null;
    for (let i = 0; i < this.people.length; i++) {
      if (this.people[i]._id === _id) {
        index = i;
        break;
      }
    }
    return index;
  }

  deletePerson(_id: string) {
    this._http.delete(`${environment.SERVER_BASE_URL}api/delete/${_id}`).subscribe(
      success => {
        this.openSnackBar(
          "Persona eliminada con éxito",
          "Ok",
          "green-snackbar"
        );
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(
          `Persona no eliminada debido al error: ${err}`,
          "Ok",
          "red-snackbar"
        );
      }
    );
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }
}
