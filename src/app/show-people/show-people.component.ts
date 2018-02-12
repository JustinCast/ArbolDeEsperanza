import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from './people.service';
import { MatDialog } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Person } from '../models/Person';
@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.scss']
})
export class ShowPeopleComponent implements OnInit {
  loading: boolean = true
  displayedColumns = ['name', 'bornDate', 'entryDate'];
  dataSource: MatTableDataSource<Person>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public personService: PeopleService, public dialog: MatDialog, public router: Router) {
    this.personService.getPersonsRequest()
    .subscribe(
      data => {
        this.personService.people = data
        this.dataSource = new MatTableDataSource(this.personService.people);
        this.loading = false
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
    console.log(this.dataSource)
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
