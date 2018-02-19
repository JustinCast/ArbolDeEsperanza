import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PeopleService } from '../show-people/people.service';
import { HttpErrorResponse } from '@angular/common/http';
import { YesOrNoService } from '../yes-or-no/yes-or-no.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {
  pag: any
  constructor(
    public _peopleService: PeopleService,
    public yesOrNoDialog: YesOrNoService,
    public snackBar: MatSnackBar,
  ) { }

  ngAfterViewInit() {
    /**
     * lo siguiente es necesario para quitar el padding por defecto que trae la libreria para paginació
     */ 
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.zero-padding { padding: 0; background-color: #424242 }';
    document.getElementsByTagName('head')[0].appendChild(style);
    let ul = document.getElementsByClassName("ngx-pagination")
    ul[0].classList.add('zero-padding')
  }

  ngOnInit() {
    if(this._peopleService.people === undefined){
      this._peopleService.getPersonsRequest()
      .subscribe(
        data => {
          this._peopleService.people = data
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          }else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      )
    }
  }

  deletePerson(index: number) {
    this.yesOrNoDialog
    .confirm('Eliminar Proyecto', `¿Está seguro que desea eliminar a ${this._peopleService.people[index].Name}`)
    .subscribe(result =>{
      console.log(result)
      if(result) {  
        this._peopleService.people.splice(index, 1)
        this.openSnackBar("Usuario eliminado", "Ok")
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
