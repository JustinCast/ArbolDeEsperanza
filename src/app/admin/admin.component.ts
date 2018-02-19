import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../show-people/people.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pag: any
  constructor(public _peopleService: PeopleService) { }

  ngOnInit() {
    if(this._peopleService.people === undefined){
      this._peopleService.getPersonsRequest()
      .subscribe(
        data => {
          this._peopleService.people = data
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          }else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      )
    }
  }

}
