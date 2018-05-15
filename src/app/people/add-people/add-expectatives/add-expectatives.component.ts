import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-expectatives',
  templateUrl: './add-expectatives.component.html',
  styleUrls: ['./add-expectatives.component.scss']
})
export class AddExpectativesComponent implements OnInit {
  person: Person
  expectativesGroup: FormGroup
  constructor(
    private _fb: FormBuilder,
    private data: DataService
  ) { 
    this.expectativesGroup = this._fb.group({
      'hearAboutWay': ['', Validators.required],
      'whatYouKnow': ['', Validators.required],
      'entryReason': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('addedInProcess'))
  }
}
