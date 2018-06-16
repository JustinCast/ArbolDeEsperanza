import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialog, MatSnackBar } from '@angular/material';
import { HouseMembersComponent } from '../house-members/house-members.component';
import { Person } from '../../models/Person';
import { PeopleService } from '../../services/people.service';
import { Expectatives } from '../../models/Expectatives';
import { SocioEconomic } from '../../models/SocioEconomic';
import { Employnment } from '../../models/Employnment';
import { Health } from '../../models/Health';
import { Education } from '../../models/Education';
import { ExpectativesService } from '../../services/expectatives.service';
import { EducationService } from '../../services/education.service';
import { SocioEconomicService } from '../../services/socio-economic.service';
import { EmploynmentService } from '../../services/employnment.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    private _location: Location,
    private expectativeService: ExpectativesService,
    private educationService: EducationService,
    private socioEconomicService: SocioEconomicService,
    private employnmentService: EmploynmentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.p = JSON.parse(localStorage.getItem('viewDetailsPerson'))
    this.makeExpectativesRequest()

  }

  makeExpectativesRequest() {
    this.expectativeService.getExpectativeByPersonID(this.p._id)
      .subscribe(
        success => {
          this.e = success
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
            this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
          }
        }
      )
  }

  makeEducationRequest() {
    this.educationService.getEducationByPersonID(this.p._id)
    .subscribe(
      success => {
        this.ed = success
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
          this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
        }
      }
    )
  }

  makeSocioEconomicRequest() {
    this.socioEconomicService.getSocioEconomicByPersonID(this.p._id)
    .subscribe(
      success => {
        this.s = success
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
          this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
        }
      }
    )
  }

  makeEmploynmentRequest() {
    this.employnmentService.getEmploynmentPersonID(this.p._id)
    .subscribe(
      success => {
        this.emp = success
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
          this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
        }
      }
    )
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

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }

}
