import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {
  person: Person
  constructor() { }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('personResolution'))
    console.log(this.person)
  }

  makeResolution(resolution) {
    console.log(resolution)
  }

}
