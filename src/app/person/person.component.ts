import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(public personService: PersonService, public dialog: MatDialog,) { }
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
