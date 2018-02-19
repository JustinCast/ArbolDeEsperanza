import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Person } from '../models/Person';
@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.scss']
})
export class ShowPeopleComponent implements OnInit, AfterViewInit {
  p: any
  filter: any = {};
  constructor(public personService: PeopleService, public router: Router) {
  }

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

  ngAfterViewInit() {
    /**
     * lo siguiente es necesario para quitar el padding por defecto que trae la libreria para paginació
     */ 
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.zero-padding { padding: 0; }';
    document.getElementsByTagName('head')[0].appendChild(style);
    let ul = document.getElementsByClassName("ngx-pagination")
    ul[0].classList.add('zero-padding')
  }

  onViewDetails(index){
    localStorage.setItem('viewDetailsPerson', JSON.stringify(this.personService.people[index]))    
    this.router.navigate(['/show-details'])
  }

  onEditPerson(index) {
    localStorage.setItem('editPerson', JSON.stringify(this.personService.people[index]));     
    this.router.navigate(['/edit-person'])
  }
}
