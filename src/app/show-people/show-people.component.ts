import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.scss']
})
export class ShowPeopleComponent implements OnInit {

  constructor(public personService: PeopleService, public dialog: MatDialog, public router: Router) { }
  collapse: Array<boolean> = new Array()
  ngOnInit() {
    this.personService.getPersonsRequest()
  }

  changeCollapse(index){
    this.collapse[index] = !this.collapse[index]
  }

  openHouseMembersDialog(members: Array<any>): void {
    let dialogRef = this.dialog.open(HouseMembersComponent, {
      width: '80%',
      data: members
    });

  }

  onEditPerson(personId) {
    this.router.navigate(['edit-person', {id: personId}])
  }
}
