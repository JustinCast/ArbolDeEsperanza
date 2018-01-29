import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';

@Component({
  selector: 'app-person',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.scss']
})
export class ShowPeopleComponent implements OnInit {

  constructor(public personService: PeopleService, public dialog: MatDialog,) { }
  collapse: boolean = false
  ngOnInit() {
    this.personService.getPersonsRequest()
  }

  changeCollapse(){
    this.collapse = !this.collapse
  }

  openHouseMembersDialog(members: Array<any>): void {
    let dialogRef = this.dialog.open(HouseMembersComponent, {
      width: '80%',
      data: members
    });

  }
}
