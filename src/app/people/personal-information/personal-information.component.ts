import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _moment from 'moment';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../models/Person';
import { Need } from '../../models/Need';
import { PeopleService } from '../../services/people.service';
import { DataService } from '../../services/data.service';
import { TIME_FORMATS } from '../../models/TimeFormats';
import { EmergencyContact } from '../../models/EmergencyContact';
import { ActivatedRoute } from '@angular/router';
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

export class PersonalInformationComponent implements OnInit, OnDestroy {
  personalInfoGroup: FormGroup
  startDate = new Date(1990, 0, 1)
  actualYear = (new Date()).getFullYear()
  person: Person
  need = new Need()
  psychoSocial = {}
  bornYear: number
  houseMembers = []
  supportInstitutions = []
  medicationList = []

  constructor(
    private _fb: FormBuilder, 
    public peopleService: PeopleService,
    public dataService: DataService,
    private route: ActivatedRoute
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
   this.personalInfoGroup.get('bornDate').valueChanges.subscribe((form) => {
      if(form._i !== undefined){
        if(form._i !== NaN){
          this.bornYear = this.calculateAge(form._i.year)
          this.personalInfoGroup.get('age').setValue(this.bornYear)
          if(this.person !== undefined)
            this.person.Age = this.bornYear
        }
      }
    })
    this.initialize()
  }

  ngOnDestroy(){
  }

  initialize() {
   this.person = JSON.parse(localStorage.getItem('person'))
   console.log(this.person)
  }

  onSubmit() {
    if(this.route.snapshot.paramMap.get('type') === '0')
      this.peopleService.savePerson(this.person)
    else
      this.peopleService.updatePerson(this.person)
    console.log(this.person)
  }

  calculateAge(bornYear: number): number {
    let age = moment().year() - bornYear
    return age
  }

}