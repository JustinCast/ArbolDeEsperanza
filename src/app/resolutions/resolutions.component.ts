import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {
  user: User
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('personResolution'))
  }

}
