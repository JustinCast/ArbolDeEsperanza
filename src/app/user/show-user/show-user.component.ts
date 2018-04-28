import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  filterargs: string = ''
  p: any
  selectionArray = [
    "Nombre de usuario",
    "Role"
  ]
  constructor(
    public _userService: UserService,
    public _router: Router,
  ) {}
  ngOnInit() {
    if(this._userService.users === undefined){
      this._userService.getUsers()
        .subscribe(
          success => {
            this._userService.users = success
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

  onViewUserDetails(index){
    localStorage.setItem('viewUserDetails', JSON.stringify(this._userService.users[index]))    
    this._router.navigate(['/show-user-details'])
  }

  onEditUser(index) {
    localStorage.setItem('editUser', JSON.stringify(this._userService.users[index]));     
    this._router.navigate(['/edit-user'])
  }
}
