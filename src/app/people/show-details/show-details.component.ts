import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';
import { Person } from '../../models/Person';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  p: Person
  constructor(
    public personService: PeopleService, 
    public dialog: MatDialog,
    private _location: Location
  ) { }

  ngOnInit() {
    this.p = JSON.parse(localStorage.getItem('viewDetailsPerson'))
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
