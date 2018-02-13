import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from './people.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Person } from '../models/Person';
@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.scss']
})
export class ShowPeopleComponent implements OnInit {
  filter: any = {};
  constructor(public personService: PeopleService, public router: Router) {
  }
  
  
  // onKey(value: string) {
  //   this.personFilter.transform(this.personService.people, this.filter)
  // }
  ngOnInit() {
    this.personService.getPersonsRequest()
    .subscribe(
      data => {
        this.personService.people = data
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

  onViewDetails(index){
    this.personService.personToViewDetails = this.personService.people[index]
    this.router.navigate(['/show-details'])
  }

  onEditPerson(index) {
    this.personService.personToEdit = this.personService.people[index]
    this.router.navigate(['people/edit-person'])
  }
}
