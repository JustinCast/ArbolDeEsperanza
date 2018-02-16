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
  person: any
  panelOpenState: boolean = false
  editForm: FormGroup
  houseMember: any = {}
  supportInstitutions = []
  medicationList = []
  nationality = [
    "Costarricense",
    "Nicaragüense",
    "Salvadoreño",
    "Colombiano",
    "Otro"
  ]
  education = [
    "Primaria incompleta",
    "Primaria completa",
    "Secundaria incompleta",
    "Secundaria completa",
    "Universidad incompleta",
    "Universidad completa",
    "Ninguno"
  ]
  houseHolding = [
    "Alquilada",
    "Propia",
    "Prestada",
    "Ocupada ilegalmente"
  ]
  houseCondition = [
    "En buenas condiciones",
    "Parcialmente en buenas condiciones",
    "En malas condiciones",
    "En muy malas condiciones"
  ]
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
    this.person = JSON.parse(localStorage.getItem('editPerson'))
  }

  addSupportInstitution(institution: string) {
    if(institution.length !== 0){
      this.person.supportInstitutions.unshift(institution)
    }
  }

  deleteSupportInstitution(index: number) {
    this.person.SupportInstitutions.splice(index, 1)
  }

  addMedication(medication: string) {
    if(medication.length !== 0){
      this.person.Medication.unshift(medication)
    }
  }

  deleteMedication(index: number) {
    this.person.Medication.splice(index, 1)
  }

  addHouseMember() {
    console.log(this.houseMember)
    if(('fullName' in this.houseMember)  && 
        ('age' in this.houseMember) &&
        ('clientRelationship' in this.houseMember) &&
        ('occupation' in this.houseMember) &&
        ('organizationState' in this.houseMember)){
      this.person.HouseMembers.unshift(this.houseMember)
      this.houseMember = {}
      return
    }
    alert('Asegúrese de completar los campos!')
  }

  deleteHouseMember(index: number) {
    this.person.HouseMembers.splice(index, 1)
  }

  calculateAge(bornYear: number): number {
    console.log(`Fecha de nacimiento: ${bornYear}`)
    console.log(`Año actual ${moment().year()}`)
    let age = moment().year() - bornYear
    console.log(age)
    return age
  }

  updatePerson() {
    this.peopleService.updatePerson(this.person)
  }

}
