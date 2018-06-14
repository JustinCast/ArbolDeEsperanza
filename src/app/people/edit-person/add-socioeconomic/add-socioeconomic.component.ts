import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Person } from '../../../models/Person';
import { SocioEconomic } from '../../../models/SocioEconomic';
import { Budget } from '../../../models/Budget';
import { SocioEconomicService } from '../../../services/socio-economic.service';

@Component({
  selector: 'app-add-socioeconomic',
  templateUrl: './add-socioeconomic.component.html',
  styleUrls: ['./add-socioeconomic.component.scss']
})
export class AddSocioeconomicComponent implements OnInit, AfterViewInit {
  socioEconomicGroup: FormGroup
  person: Person
  socioEconomic: SocioEconomic
  constructor(
    private _fb: FormBuilder,
    private data: DataService,
    private socioEconomicService: SocioEconomicService
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
      'mainHouseProvider': ['', Validators.required],
      'montlyIncome': ['', Validators.required],
      'familyIncome': ['', Validators.required],
      //'budgetPlan': ['', Validators.required],
      'totalServices': ['', Validators.required],
      'totalAmount': ['', Validators.required],
      'houseCondition': ['', Validators.required],
      'houseHolding': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('person'))
    this.socioEconomic = new SocioEconomic(
      0,
      0,
      [],
      '',
      [],
      [],
      '',
      0,
      0,
      new Budget(0, [], 0),
      '',
      '',
      this.person._id
    )
  }

  ngAfterViewInit() {
  }


  onSubmit() {
    this.socioEconomicService.saveSocioEconomicDoc(this.socioEconomic)
  }

  addHomeService(service: string) {
    this.socioEconomic.HomeServices.unshift(service)
  }

  deleteHomeService(index: number) {
    this.socioEconomic.HomeServices.splice(index, 1)
  }

  addInstitutionHelp(i: any) {
    this.socioEconomic.InstitutionsHelp.unshift(i)
  }
  
  deleteInstitutionHelp(index: number) {
    this.socioEconomic.InstitutionsHelp.splice(index, 1)
  }

  addChildrenHelp(c: any){
    this.socioEconomic.ChildrenHelp.unshift(c)
  }

  deleteChildrenHelp(index: number) {
    this.socioEconomic.ChildrenHelp.splice(index, 1)
  }
}
