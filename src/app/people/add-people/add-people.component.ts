import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

import { Person } from '../../models/Person';
import { Need } from '../../models/Need';
import { PeopleService } from '../../services/people.service';
import { HouseMember } from '../../models/HouseMember';
import { Resolution } from '../../models/Resolution';
import { ConsultationReasons } from '../../models/ConsultationReason';
import { Violence } from '../../models/Violence';
import { Health } from '../../models/Health';
import { Employnment } from '../../models/Employnment';
import { SocioEconomic } from '../../models/SocioEconomic';
import { Budget } from '../../models/Budget';
import { Education } from '../../models/Education';
import { EmergencyContact } from '../../models/EmergencyContact';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss']
})
export class AddPeopleComponent implements OnInit, AfterViewChecked {
  person: Person
  personGroup: FormGroup
  panelOpenState: boolean = false
  icon: string = 'close'
  houseMember: any = {}  
  bornYear: number
  houseMembers = []
  supportInstitutions = []
  medicationList = []
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
    private _fb: FormBuilder, 
    public peopleService: PeopleService,
    private _location: Location
  ) { 
    this.personGroup = this._fb.group({    
      'domesticViolence': ['', Validators.required],
      'educationalProgram': ['', Validators.required],
      'mentalProgram': ['', Validators.required],
      'protectionOrder': ['', Validators.required],
      'socialServices': ['', Validators.required],
      'sexualAbuse': ['', Validators.required],
      'wfsProgramGraduate': ['', Validators.required],
      'workSkillsProgram': ['', Validators.required],      
      'maritalStatus': ['', Validators.required],
      'read': ['', Validators.required],
      'write': ['', Validators.required],
      'socialSecurity': ['', Validators.required],
      'socialSecurityType': ['', Validators.required],
      'education': ['', Validators.required],
      'nationality': ['', Validators.required],      
      'address': ['', Validators.required],
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

  onSubmit(formValue: any) {
  }

  ngOnInit() {
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
    localStorage.setItem('addedInProcess', JSON.stringify(this.person))
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
}
