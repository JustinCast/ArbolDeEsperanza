import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Person } from '../models/Person';
@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss'],
})
export class AddPeopleComponent implements OnInit, AfterViewChecked {
  personGroup: FormGroup
  icon: string = 'close'
  person: any = {}
  houseMember: any = {}
  startDate = new Date(1990, 0, 1)
  houseMembers = []
  supportInstitutions = []
  medication = []
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
  constructor(private _fb: FormBuilder) { 
    this.personGroup = this._fb.group({
      'name': ['', Validators.required],
      'entryDate': ['', Validators.required],
      'activeOrInactive': ['', Validators.required],
      'age': ['', Validators.required],
      'bornDate': ['', Validators.required],
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
      'workingHours': ['', Validators.required],
      'unemployedDate': ['', Validators.required],
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
    this.personGroup.valueChanges.subscribe((form) => {
      if(!this.personGroup.invalid)
        this.icon = "save"
      else
        this.icon = "close"
    }) 
  }

  onSubmit(formValue: any) {
    let createdPerson: Person = new Person(
      String(this.person.name),
      new Date(this.person.entryDate),
      (this.person.activeOrInactive === "true"),
      this.person.age as number,
      new Date(this.person.bornDate),
      (this.person.read === "true"),
      (this.person.write === "true"),
      (this.person.socialSecurity === "true"),
      this.person.socialSecurityType,
      this.person.education,
      this.person.nationality,
      this.person.phoneNumber,
      this.person.address,
      this.person.email,
      (this.person.needDoctor === "true"),
      (this.person.needOphthalmologist === "true"),
      (this.person.needMammography === "true"),
      (this.person.needDentist === "true"),
      (this.person.needGynecologist === "true"),
      (this.person.needPychologist === "true"),
      (this.person.abuseVictim === "true"),
      (this.person.suicideAttempt === "true"),
      (this.person.suicideToughts === "true"),
      (this.person.drugsProblem === "true"),
      (this.person.alcoholProblem === "true"),
      (this.person.takeMedication === "true"),
      this.medication,
      this.person.employnmentSituation,
      this.person.workingHours,
      this.person.unemployedDate,
      this.supportInstitutions,
      this.person.peopleInTheHouse,
      this.person.underagePeople,
      this.person.disabilitiePeople,
      this.person.houseIncome,
      this.person.incomeSource,
      this.person.houseHolding,
      this.person.houseCondition,
      this.houseMembers
    )
    console.log(createdPerson)
  }

  ngOnInit() {
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
