import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";


import * as _moment from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { Person } from '../../models/Person';
import { Need } from '../../models/Need';
import { PsychoSocial } from '../../models/PsychoSocial';
import { PeopleService } from '../../services/people.service';
import { HouseMember } from '../../models/HouseMember';
import { Resolution } from '../../models/Resolution';
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
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class AddPeopleComponent implements OnInit, AfterViewChecked {
  personGroup: FormGroup
  panelOpenState: boolean = false
  icon: string = 'close'
  person: Person
  need: Need
  psychoSocial: PsychoSocial
  houseMember: any = {}
  startDate = new Date(1990, 0, 1)
  actualYear = (new Date()).getFullYear()
  bornYear: number
  houseMembers = []
  supportInstitutions = []
  medicationList = []
  nationality = [
    "Costarricense",
    "Nicaragüense",
    "Salvadoreño",
    "Colombiano",
    "Otro"
  ]
  referecedBy = [
    "Gobierno",
    "Organización no Gubernamental",
    "Familia o Amigo",
    "Anuncio"
  ]
  documentedI = [
    "Si",
    "No",
    "N/A"
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
  mStatus = [
    "Soltera",
    "Casada",
    "Divorciada",
    "Viuda",
    "Relación"
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
    private _fb: FormBuilder, 
    public peopleService: PeopleService,
    private _location: Location
  ) { 
    this.personGroup = this._fb.group({
      'name': ['', Validators.required],
      'lastName': ['', Validators.required],
      'reference': ['', Validators.required],
      'documented': ['', Validators.required],
      'entryDate': [moment(), Validators.required],
      'activeOrInactive': ['', Validators.required],
      'domesticViolence': ['', Validators.required],
      'educationalProgram': ['', Validators.required],
      'mentalProgram': ['', Validators.required],
      'protectionOrder': ['', Validators.required],
      'socialServices': ['', Validators.required],
      'sexualAbuse': ['', Validators.required],
      'wfsProgramGraduate': ['', Validators.required],
      'workSkillsProgram': ['', Validators.required],
      'bornDate': [moment(), Validators.required],
      'age': [{value: 'Ingrese una fecha de nacimiento', disabled: true}, Validators.required],
      'maritalStatus': ['', Validators.required],
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
    this.personGroup.get('bornDate').valueChanges.subscribe((form) => {
      if(form._i !== undefined){
        if(form._i !== NaN){
          this.bornYear = this.calculateAge(form._i.year)
          this.personGroup.get('age').setValue(this.bornYear)
        }
      }
    }) 
  }

  onSubmit(formValue: any) {
    console.log(this.person)
    this.peopleService.savePerson(this.person)
  }

  ngOnInit() {
    this.need = new Need(
      false,
      false,
      false,
      false,
      false,
      false
    )
    this.psychoSocial = new PsychoSocial(
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
      false
    )
    this.person = new Person(
      "",
      "",
      "",
      "",
      "",
      new Date(),
      false,
      0,
      new Date(),
      false,
      false,
      false,
      "",
      "",
      "",
      "",
      "",
      "",
      this.need,
      this.psychoSocial,
      false,
      this.medicationList,
      "",
      0,
      "",
      this.supportInstitutions,
      0,
      0,
      0,
      0,
      "",
      "",
      "",
      this.houseMembers as HouseMember[],
      new Array<Resolution>()
    )
  }

  backClicked() {
    this._location.back();
  }

  ngAfterViewChecked() {
  }

  addSupportInstitution(institution: string) {
    if(institution.length !== 0){
      this.supportInstitutions.unshift(institution)
    }
  }

  deleteSupportInstitution(index: number) {
    this.supportInstitutions.splice(index, 1)
  }

  addMedication(medication: string) {
    if(medication.length !== 0){
      this.medicationList.unshift(medication)
    }
  }

  deleteMedication(index: number) {
    this.medicationList.splice(index, 1)
  }
  
  addHouseMember() {
    console.log(this.houseMember)
    if(('fullName' in this.houseMember)  && 
        ('age' in this.houseMember) &&
        ('clientRelationship' in this.houseMember) &&
        ('occupation' in this.houseMember) &&
        ('organizationState' in this.houseMember)){
      this.houseMembers.unshift(this.houseMember)
      this.houseMember = {}
      return
    }
    alert('Asegúrese de completar los campos!')
  }

  deleteHouseMember(index: number) {
    this.houseMembers.splice(index, 1)
  }

  calculateAge(bornYear: number): number {
    console.log(`Fecha de nacimiento: ${bornYear}`)
    console.log(`Año actual ${moment().year()}`)
    let age = moment().year() - bornYear
    console.log(age)
    return age
  }

}
