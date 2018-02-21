import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  actualYear = (new Date()).getFullYear()
  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
  forwardClicked() {
    this._location.forward()
  }
}
