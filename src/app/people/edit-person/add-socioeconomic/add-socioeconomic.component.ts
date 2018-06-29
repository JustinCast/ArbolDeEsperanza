import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Person } from '../../../models/Person';
import { SocioEconomic } from '../../../models/SocioEconomic';
import { Budget } from '../../../models/Budget';
import { SocioEconomicService } from '../../../services/socio-economic.service';
import { MatSnackBar } from '@angular/material';

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
    public data: DataService,
    private socioEconomicService: SocioEconomicService,
    private snackBar: MatSnackBar
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
      '',
      '',
      [],
      '',
      [],
      [],
      '',
      '',
      '',
      new Budget(0, [], 0),
      '',
      '',
      this.person._id
    )
  }

  ngAfterViewInit() {
  }


  onSubmit() {
    if(!this.socioEconomicService.existency)
      this.socioEconomicService.saveSocioEconomicDoc(this.socioEconomic)
    else
      this.socioEconomicService.updateSocioEconomicDoc(this.socioEconomic)
  }

  addHomeService(service: string) {
    if(!this.socioEconomic.HomeServices.includes(service))
      this.socioEconomic.HomeServices.unshift(service)
    else
      this.openSnackBar('Ya agregó el servicio', 'Ok', 'red-snackbar')
  }

  deleteHomeService(index: number) {
    this.socioEconomic.HomeServices.splice(index, 1)
  }

  addInstitutionHelp(i: any) {
    if(!this.socioEconomic.InstitutionsHelp.includes(i))
      this.socioEconomic.InstitutionsHelp.unshift(i)
    else
      this.openSnackBar('Ya agregó la institución', 'Ok', 'red-snackbar')
  }
  
  deleteInstitutionHelp(index: number) {
    this.socioEconomic.InstitutionsHelp.splice(index, 1)
  }

  addChildrenHelp(c: any){
    if(!this.socioEconomic.ChildrenHelp.includes(c))
      this.socioEconomic.ChildrenHelp.unshift(c)
    else
      this.openSnackBar('Ya agregó la institución', 'Ok', 'red-snackbar')
  }

  deleteChildrenHelp(index: number) {
    this.socioEconomic.ChildrenHelp.splice(index, 1)
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }
}
