import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../../models/User';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User
  constructor(
    private _location: Location
  ) { }


  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('viewUserDetails'))
  }

}
