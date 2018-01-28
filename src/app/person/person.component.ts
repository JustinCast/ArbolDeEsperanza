import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(public personService: PersonService) { }
  collapse: boolean = false
  ngOnInit() {
    this.personService.getPersonsRequest()
  }

  changeCollapse(){
    this.collapse = !this.collapse
  }
}
