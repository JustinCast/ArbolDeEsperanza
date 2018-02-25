import { Component, OnInit, AfterViewInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { YesOrNoService } from '../yes-or-no/yes-or-no.service';
import { MatSnackBar } from '@angular/material';
import { PeopleService } from '../services/people.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {
  usersRole = [
    'Admin',
    'Editor',
    'NormalUser'
  ]
  userFG: FormGroup
  user: User
  constructor(
    public yesOrNoDialog: YesOrNoService,
    public snackBar: MatSnackBar,
    private _fb: FormBuilder
  ) { 
    this.userFG = this._fb.group({
      "UserName": ['', Validators.required],
      "Password": ['', Validators.required],
      "Role": ['', Validators.required]
    })
  }

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
    this.user = new User("", "", "")
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
