import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [UserService]
})
export class AdminComponent implements OnInit, AfterViewInit {
  p: any
  filter: any = {};
  selection: any
  selectionArray = [
    "Nombre de usuario",
    "Role"
  ]
  constructor(
    public _userService: UserService,
    public _router: Router,
  ) {}
  ngOnInit() {
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
    localStorage.setItem('viewDetailsUser', JSON.stringify(this._userService.users[index]))    
    this._router.navigate(['/show-user-details'])
  }

  onEditPerson(index) {
    localStorage.setItem('editUser', JSON.stringify(this._userService.users[index]));     
    this._router.navigate(['/edit-user'])
  }
}
