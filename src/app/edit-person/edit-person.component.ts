import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/Person';
import { PeopleService } from '../show-people/people.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _moment from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
const moment =  _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class EditPersonComponent implements OnInit {
  person: Person
  editForm: FormGroup
  constructor(
    private route: ActivatedRoute, 
    public peopleService: PeopleService,
    public _fb: FormBuilder
  ) { 
    this.editForm = this._fb.group({
      'name': ['', Validators.required],
      'entryDate': [moment(), Validators.required],
      'activeOrInactive': ['', Validators.required],
      'bornDate': [moment(), Validators.required],
      'read': ['', Validators.required],
      'write': ['', Validators.required],
      'socialSecurity': ['', Validators.required],
      'socialSecurityType': ['', Validators.required],
      'education': ['', Validators.required],
      'nationality': ['', Validators.required],
      'phoneNumber': ['', Validators.required],
      'address': ['', Validators.required],
      'email': ['', Validators.required],
      'needDoctor': ['', Validators.required],
      'needOphthalmologist': ['', Validators.required],
      'needMammography': ['', Validators.required],
      'needDentist': ['', Validators.required],
      'needGynecologist': ['', Validators.required],
      'needPychologist': ['', Validators.required],
      'abuseVictim': ['', Validators.required],
      'suicideAttempt': ['', Validators.required],
      'suicideToughts': ['', Validators.required],
      'drugsProblem': ['', Validators.required],
      'alcoholProblem': ['', Validators.required],
      'takeMedication': ['', Validators.required],
      'medication': ['', Validators.required],
      'employnmentSituation': ['', Validators.required],
      'workingHours': [''],
      'unemployedDate': [''],
      'supportInstitutions': ['', Validators.required],
      'peopleInTheHouse': ['', Validators.required],
      'underagePeople': ['', Validators.required],
      'disabilitiePeople': ['', Validators.required],
      'houseIncome': ['', Validators.required],
      'incomeSource': ['', Validators.required],
      'houseHolding': ['', Validators.required],
      'houseCondition': ['', Validators.required],
      'houseMembers': ['', Validators.required],
    })
  }

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
