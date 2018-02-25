import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Person } from '../models/Person';
import { YesOrNoService } from '../yes-or-no/yes-or-no.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.scss']
})
export class ShowPeopleComponent implements OnInit, AfterViewInit {
  p: any
  filter: any = {};
  selection: any
  selectionArray = [
    "Nombre",
    "Apellidos",
    "Nacionalidad",
    "Número teléfono"
  ]
  constructor(
    public personService: 
    PeopleService, 
    public router: Router,
    public yesOrNoDialog: YesOrNoService,
    public snackBar: MatSnackBar,
  ) {}

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

  deletePerson(index: number) {
    this.yesOrNoDialog
    .confirm('Eliminar Proyecto', `¿Está seguro que desea eliminar a ${this.personService.people[index].Name}`)
    .subscribe(result =>{
      console.log(result)
      if(result) {
        this.personService.deletePerson(this._peopleService.people[index]._id)  
        this.personService.people.splice(index, 1)
        this.openSnackBar("Usuario eliminado", "Ok")
      }
    })
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
