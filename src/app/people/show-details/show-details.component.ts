import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';
import { Person } from '../../models/Person';
import { PeopleService } from '../../services/people.service';
import { Expectatives } from '../../models/Expectatives';
import { SocioEconomic } from '../../models/SocioEconomic';
import { Employnment } from '../../models/Employnment';
import { Health } from '../../models/Health';
import { Education } from '../../models/Education';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  p: Person
  e: Expectatives
  ed: Education
  s: SocioEconomic
  emp: Employnment
  h: Health
  constructor(
    public personService: PeopleService, 
    public dialog: MatDialog,
    private _location: Location
  ) { }

  ngOnInit() {
    this.p = JSON.parse(localStorage.getItem('viewDetailsPerson'))
    console.log(this.p)
  }

  backClicked() {
    this._location.back();
  }

  openHouseMembersDialog(members: Array<any>): void {
    let dialogRef = this.dialog.open(HouseMembersComponent, {
      width: '80%',
      data: members
    });

  }

}
