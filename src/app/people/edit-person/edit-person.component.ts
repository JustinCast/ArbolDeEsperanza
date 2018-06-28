import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PeopleService } from '../../services/people.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    public peopleService: PeopleService,
    private _location: Location,
    public router: Router
  ) { }

  ngOnInit() {
    if(this.peopleService.people === undefined){
      this.peopleService.getPersonsRequest()
      .subscribe(
        data => {
          this.peopleService.people = data
          localStorage.setItem('person', JSON.stringify(this.peopleService.people[this.route.snapshot.paramMap.get('index')]))
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`);
          }
        }
      )
    }else
      localStorage.setItem('person', JSON.stringify(this.peopleService.people[this.route.snapshot.paramMap.get('index')]))
  }

  editPersonalInfo() {
    this.router.navigate(['/personal-information', 1])
  }

  editExpectatives() {
    this.router.navigate(['/add-expectatives'])
  }

  editEducation() {
    this.router.navigate(['/add-education'])
  }

  editEmployee(){
    this.router.navigate(['/add-employnment'])
  }
  editHealth() {
    this.router.navigate(['/add-health'])
  }

  editSocioEconomic() {
    this.router.navigate(['/add-socioeconomic'])
  }

  backClicked() {
    this._location.back();
  }
  ngOnDestroy() {
  }

}
