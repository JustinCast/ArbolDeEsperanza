import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss'],
})
export class AddPeopleComponent implements OnInit, AfterViewChecked {
  personGroup: FormGroup
  icon: string = 'close'
  person: any = {}
  startDate = new Date(1990, 0, 1);
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
    console.log(this.person)
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
  }

}
