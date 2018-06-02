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
  constructor(
    private _fb: FormBuilder, 
    public peopleService: PeopleService,
    private _location: Location
  ) { 
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
    let proof = new Person(
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
      ''
    )
    localStorage.setItem('proof', JSON.stringify(proof))
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
