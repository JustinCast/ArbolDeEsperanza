import { Component, OnInit } from '@angular/core';
import { TIME_FORMATS } from '../../../models/TimeFormats';
import * as _moment from 'moment';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../../../services/people.service';
import { Person } from '../../../models/Person';
import { DataService } from '../../../services/data.service';

const moment =  _moment;

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: TIME_FORMATS }
  ]
})

export class PersonalInformationComponent implements OnInit {
  personalInfoGroup: FormGroup
  startDate = new Date(1990, 0, 1)
  actualYear = (new Date()).getFullYear()
  person: Person
  bornYear: number

  constructor(
    private _fb: FormBuilder, 
    public peopleService: PeopleService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.personalInfoGroup = this._fb.group({
      'name': ['', Validators.required],
      'lastName': ['', Validators.required],
      'activeOrInactive': ['', Validators.required],
      'entryDate': [moment(), Validators.required],
      'bornDate': [moment(), Validators.required],
      'age': [{value: 'Ingrese una fecha de nacimiento', disabled: true}, Validators.required],
      'phoneNumber': ['', Validators.required],
      'email': ['', Validators.required],
      'fullNameContact': ['', Validators.required],
      'relationship': ['', Validators.required],
      'emergencyContactNumber': ['', Validators.required],
      'referencedBy': ['', Validators.required],
      'dni': ['', Validators.required],
      'documented': ['', Validators.required],
      'nationality': ['', Validators.required],
      'maritalStatus': ['', Validators.required],
      'residence': ['', Validators.required],
    })
    this.personalInfoGroup.get('bornDate').valueChanges.subscribe((form) => {
      if(form._i !== undefined){
        if(form._i !== NaN){
          this.bornYear = this.calculateAge(form._i.year)
          this.personalInfoGroup.get('age').setValue(this.bornYear)
        }
      }
    }) 
  }

  calculateAge(bornYear: number): number {
    console.log(`Fecha de nacimiento: ${bornYear}`)
    console.log(`Año actual ${moment().year()}`)
    let age = moment().year() - bornYear
    console.log(age)
    return age
  }

}
