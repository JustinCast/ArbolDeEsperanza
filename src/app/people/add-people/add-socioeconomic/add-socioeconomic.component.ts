import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Person } from '../../../models/Person';

@Component({
  selector: 'app-add-socioeconomic',
  templateUrl: './add-socioeconomic.component.html',
  styleUrls: ['./add-socioeconomic.component.scss']
})
export class AddSocioeconomicComponent implements OnInit, AfterViewInit {
  socioEconomicGroup: FormGroup
  person: Person

  constructor(
    private _fb: FormBuilder,
    private data: DataService
  ) { 
    this.createForm()
  }

  createForm() {
    this.person = JSON.parse(localStorage.getItem('addedInProcess'))
    this.socioEconomicGroup = this._fb.group({
      'peopleInTheHouse': ['', Validators.required],
      'underagePeople': ['', Validators.required],
      'homeServices': ['', Validators.required],
      'payman': ['', Validators.required],
      'childrenHelp': ['', Validators.required],
      'institutionsHelp': ['', Validators.required],
      'mainHouseProvider': ['', Validators.required],
      'montlyIncome': ['', Validators.required],
      'familyIncome': ['', Validators.required],
      'budgetPlan': ['', Validators.required],
      'totalServices': ['', Validators.required],
      'totalAmount': ['', Validators.required],
      'houseHolding': ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  // TODO: Recordar guardar en el local storage a la persona
  onSubmit() {
  }

  addHomeService(service: string) {
    this.person.SocioEconomic.HomeServices.unshift(service)
  }

  deleteHomeService(index: number) {
    this.person.SocioEconomic.HomeServices.splice(index, 1)
  }
}
