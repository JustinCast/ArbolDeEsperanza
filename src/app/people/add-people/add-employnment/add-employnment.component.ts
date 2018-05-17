import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../../models/Person';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-employnment',
  templateUrl: './add-employnment.component.html',
  styleUrls: ['./add-employnment.component.scss']
})
export class AddEmploynmentComponent implements OnInit {
  employnmentGroup: FormGroup
  person: Person
  constructor(
    private _fb: FormBuilder,
    public data: DataService
  ) { 
  }
  
  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('addedInProcess'))
    this.employnmentGroup = this._fb.group({
      'doYoHaveWork': ['', Validators.required],
      'occupation': ['', Validators.required],
      'unemploynmentReason': ['', Validators.required],
      'unemploymentDate': ['', Validators.required],
      'workFrecuency': ['', Validators.required],
      'workFewHours': ['', Validators.required],
      'whyWorkFewHours': ['', Validators.required],
      'whyIsItImposible': ['', Validators.required],
      'haveABusiness': ['', Validators.required],
      'sellProducts': ['', Validators.required],
      'clients': ['', Validators.required]
    })
  }

}
