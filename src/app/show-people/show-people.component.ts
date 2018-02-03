import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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
    .subscribe(
      data => {
        this.personService.people = data
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    )
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

  onEditPerson(index) {
    this.router.navigate(['people/edit-person', index])
  }
}
