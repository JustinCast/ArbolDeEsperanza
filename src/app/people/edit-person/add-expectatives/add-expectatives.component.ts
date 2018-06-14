import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Expectatives } from '../../../models/Expectatives';
import { ExpectativesService } from '../../../services/expectatives.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../../services/people.service';

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
    private expectativesService: ExpectativesService,
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) { 
    this.expectativesGroup = this._fb.group({
      'hearAboutWay': ['', Validators.required],
      'whatYouKnow': ['', Validators.required],
      'entryReason': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.person = this.peopleService.people[String(this.route.snapshot.paramMap.get('index'))]
    this.expectatives = new Expectatives(
      '',
      '',
      '',
      this.person._id
    )
  }

  onSubmit(){
    //localStorage.setItem('addedInProcess', JSON.stringify(this.person))
    this.expectativesService.saveExpectative(this.expectatives)
  }
}
