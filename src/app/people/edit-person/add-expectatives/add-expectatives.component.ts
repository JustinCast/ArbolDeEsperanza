import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Expectatives } from '../../../models/Expectatives';
import { ExpectativesService } from '../../../services/expectatives.service';

@Component({
  selector: 'app-add-expectatives',
  templateUrl: './add-expectatives.component.html',
  styleUrls: ['./add-expectatives.component.scss']
})
export class AddExpectativesComponent implements OnInit {
  expectatives: Expectatives
  person: Person
  expectativesGroup: FormGroup
  constructor(
    private _fb: FormBuilder,
    private data: DataService,
    private expectativesService: ExpectativesService
  ) { 
    this.expectativesGroup = this._fb.group({
      'hearAboutWay': ['', Validators.required],
      'whatYouKnow': ['', Validators.required],
      'entryReason': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('addedInProcess'))
    this.expectatives = new Expectatives(
      '',
      '',
      ''
    )
  }

  onSubmit(){
    //localStorage.setItem('addedInProcess', JSON.stringify(this.person))
    //this.expectativesService.saveExpectative(this.expectatives)
  }
}
