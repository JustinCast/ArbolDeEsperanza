import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/Person';
import { PeopleService } from '../show-people/people.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  person: Person
  constructor(private route: ActivatedRoute, public peopleService: PeopleService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log(params)
      if(this.peopleService.people === undefined){
        this.peopleService.getPersonsRequest()
        .subscribe(
          data => {
            this.peopleService.people = data
            this.person = this.peopleService.people[params.index]
            console.log(this.person)
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
      }else {
        this.person = this.peopleService.people[+params.index]
        console.log(this.person)
      }
    });
  }

}
