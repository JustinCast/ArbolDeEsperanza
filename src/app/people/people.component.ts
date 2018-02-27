import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

}
