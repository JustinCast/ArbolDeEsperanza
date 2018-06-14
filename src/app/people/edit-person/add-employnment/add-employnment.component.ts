import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../../models/Person';
import { DataService } from '../../../services/data.service';
import { Employnment } from '../../../models/Employnment';
import { EmploynmentService } from '../../../services/employnment.service';

@Component({
  selector: 'app-add-employnment',
  templateUrl: './add-employnment.component.html',
  styleUrls: ['./add-employnment.component.scss']
})
export class AddEmploynmentComponent implements OnInit {
  employnmentGroup: FormGroup
  person: Person
  employnment: Employnment
  addedClients: Array<string> = new Array()
  constructor(
    private _fb: FormBuilder,
    public data: DataService,
    public employnmentService: EmploynmentService
  ) { 
  }
  
  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('person'))
    this.employnment = new Employnment(
      '',
      '',
      '',
      '',
      '',
      false,
      '',
      '',
      false,
      0,
      [],
      this.person._id
    )
    this.employnmentGroup = this._fb.group({
      'doYouHaveWork': ['', Validators.required],
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
  
  addClient(client: string){
    this.addedClients.unshift(client)
  }

  deleteClient(index: number) {
    this.addedClients.splice(index, 1)
  }
  onSubmit() {
    this.employnmentService.saveEmploynmentDoc(this.employnment)
  }
}
