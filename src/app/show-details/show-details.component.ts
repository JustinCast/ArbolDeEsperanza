import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../show-people/people.service';
import { Person } from '../models/Person';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  p: Person
  constructor(public personService: PeopleService, public dialog: MatDialog) { }

  ngOnInit() {
    this.p = this.personService.personToViewDetails
  }

  openHouseMembersDialog(members: Array<any>): void {
    let dialogRef = this.dialog.open(HouseMembersComponent, {
      width: '80%',
      data: members
    });

  }

}
