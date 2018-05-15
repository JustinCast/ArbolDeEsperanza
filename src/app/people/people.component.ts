import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';
import { Person } from '../models/Person';
import { Violence } from '../models/Violence';
import { ConsultationReasons } from '../models/ConsultationReason';
import { Need } from '../models/Need';
import { Health } from '../models/Health';
import { Employnment } from '../models/Employnment';
import { Budget } from '../models/Budget';
import { SocioEconomic } from '../models/SocioEconomic';
import { Education } from '../models/Education';
import { EmergencyContact } from '../models/EmergencyContact';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  logguedUser: User
  person: Person
  constructor(
    private _auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.logguedUser = JSON.parse(this._auth.getUser())
  }
  
  initializeJSON(){
    this.person = new Person(
      '',
      '',
      false,
      new Date(),
      new Date(),
      0,
      '',
      '',
      new EmergencyContact(
        '',
        '',
        0
      ),
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      new Education(
        false,
        '',
        [],
        ''
      ),
      new SocioEconomic(
        0,
        0,
        [],
        '',
        [],
        [],
        '',
        0,
        0,
        new Budget(
          0,
          [],
          0
        ),
        '',
        ''
      ),
      new Employnment(
        '',
        '',
        '',
        new Date(),
        0,
        false,
        '',
        '',
        false,
        0,
        [],
        ''
      ),
      new Health(
        '',
        new Need(
          false,
          false,
          false,
          false,
          false,
          false
        ),
        false,
        [],
        new ConsultationReasons(
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          [],
          false,
          false,
          false,
          ''
        ),
        new Violence(
          false,
          false,
          false,
          false,
          false
        ),
        false,
        false,
        false,
        false,
        ''
      )
    )
    localStorage.setItem('addedInProcess', JSON.stringify(this.person))
  }

}
