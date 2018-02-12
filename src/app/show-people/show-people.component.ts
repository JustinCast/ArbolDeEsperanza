import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.scss']
})
export class ShowPeopleComponent implements OnInit {
  collapse: Array<boolean> = new Array()
  public personCtrl: FormControl = new FormControl();
  filteredPeople: Observable<any[]>;
  constructor(public personService: PeopleService, public dialog: MatDialog, public router: Router) {
  }

  initializeValuesAndChanges() {
    this.filteredPeople = this.personCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterPeople(state) : this.personService.people.slice())
      );
  }

  filterPeople(name: string) {
    return this.personService.people.filter(state =>
      state.Name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  ngOnInit() {
    this.personService.getPersonsRequest()
    .subscribe(
      data => {
        this.personService.people = data
        this.initializeValuesAndChanges()
        console.log(data)
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
    this.personService.personToEdit = this.personService.people[index]
    this.router.navigate(['people/edit-person'])
  }
}
