import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  public title: string;
  public message: string;
  constructor() { }

  ngOnInit() {
  }

}
