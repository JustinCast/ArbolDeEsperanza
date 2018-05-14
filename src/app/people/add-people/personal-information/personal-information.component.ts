import { Component, OnInit } from '@angular/core';
import { TIME_FORMATS } from '../../../models/TimeFormats';
import * as _moment from 'moment';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../../../services/people.service';
import { Person } from '../../../models/Person';
import { DataService } from '../../../services/data.service';
import { Need } from '../../../models/Need';
import { Resolution } from '../../../models/Resolution';
import { HouseMember } from '../../../models/HouseMember';
import { EmergencyContact } from '../../../models/EmergencyContact';
import { Education } from '../../../models/Education';
import { SocioEconomic } from '../../../models/SocioEconomic';
import { Budget } from '../../../models/Budget';
import { Employnment } from '../../../models/Employnment';
import { Health } from '../../../models/Health';
import { ConsultationReasons } from '../../../models/ConsultationReason';
import { Violence } from '../../../models/Violence';

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
  person
  need = new Need()
  psychoSocial = {}
  bornYear: number
  houseMembers = []
  supportInstitutions = []
  medicationList = []

  constructor(
    private _fb: FormBuilder, 
    public peopleService: PeopleService,
    public dataService: DataService
  ) { 
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
  }

  ngOnInit() {
   /* this.personalInfoGroup.get('bornDate').valueChanges.subscribe((form) => {
      if(form._i !== undefined){
        if(form._i !== NaN){
          this.bornYear = this.calculateAge(form._i.year)
          this.personalInfoGroup.get('age').setValue(this.bornYear)
        }
      }
    }) */
    this.initialize()
  }

  initialize() {
    this.person = new Person(
      '',
      '',
      false,
      new Date(),
      new Date(),
      0,
      '',
      '',
      new EmergencyContact(
        '',
        '',
        0
      ),
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      new Education(
        false,
        '',
        [],
        ''
      ),
      new SocioEconomic(
        0,
        0,
        [],
        '',
        [],
        [],
        '',
        0,
        0,
        new Budget(
          0,
          [],
          0
        ),
        '',
        ''
      ),
      new Employnment(
        '',
        '',
        '',
        new Date(),
        0,
        false,
        '',
        '',
        false,
        0,
        [],
        ''
      ),
      new Health(
        '',
        new Need(
          false,
          false,
          false,
          false,
          false,
          false
        ),
        false,
        [],
        new ConsultationReasons(
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          [],
          false,
          false,
          false,
          ''
        ),
        new Violence(
          false,
          false,
          false,
          false,
          false
        ),
        false,
        false,
        false,
        false,
        ''
      )
    )
  }

  calculateAge(bornYear: number): number {
    console.log(`Fecha de nacimiento: ${bornYear}`)
    console.log(`Año actual ${moment().year()}`)
    let age = moment().year() - bornYear
    console.log(age)
    return age
  }

}
