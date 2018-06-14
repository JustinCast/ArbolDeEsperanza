import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PeopleService } from '../../services/people.service';
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    public peopleService: PeopleService,
    private _location: Location,
    public router: Router
  ) { }

  ngOnInit() {
    localStorage.setItem('person', JSON.stringify(this.peopleService.people[this.route.snapshot.paramMap.get('index')]))
  }

  editPersonalInfo() {
    this.router.navigate(['/personal-information', 1])
  }

  editExpectatives() {
    this.router.navigate(['/add-expectatives'])
  }

  editEducation() {
    this.router.navigate(['/add-education'])
  }

  editEmployee(){
    this.router.navigate(['/add-employnment'])
  }

  backClicked() {
    this._location.back();
  }
  ngOnDestroy() {
  }

}
