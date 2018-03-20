import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';

import {Location} from '@angular/common';
import { Resolution } from '../models/Resolution';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {
  person: Person
  localResolutions: Array<Resolution> = [] // esto es para evitar que se ingresen resoluciones no deseadas
  checkedStates: Array<boolean> = new Array<boolean>(6)
  constructor(
    public peopleService: PeopleService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('personResolution'))
  }

  backClicked() {
    this._location.back();
  }

  makeResolution(list) {
    list.selectedOptions.selected.map(item => {
      this.person.Resolutions.push(new Resolution(item.value, new Date()))
      switch (String(item.value)) {
        case 'Need_Doctor':
          this.person.Need.Need_Doctor = false
          break;
        case 'Need_Ophthalmologist':
          this.person.Need.Need_Ophthalmologist = false
          break;
        case 'Need_Mammography':
          this.person.Need.Need_Mammography = false
          break;
        case 'Need_Dentist':
          this.person.Need.Need_Dentist = false
          break;
        case 'Need_Gynecologist':
          this.person.Need.Need_Gynecologist = false
          break;
        case 'Need_Psychologist':
          this.person.Need.Need_Psychologist = false
          break;      
        default:
          break;
      }
    });
    console.log('RESOLUCIONES ', this.person.Resolutions)
    console.log('PERSONA ', this.person)
    this.peopleService.updatePerson(this.person)
  }

}
