import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';
import { Resolution } from '../models/Resolution';

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {
  person: Person
  localResolutions: Array<Resolution> = [] // esto es para evitar que se ingresen resoluciones no deseadas
  checkedStates: Array<boolean> = new Array<boolean>(6)
  constructor() { }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('personResolution'))
    console.log(this.person)
  }

  makeResolution(resolution) {
    console.log(this.checkedStates)
    console.log(this.localResolutions)
    switch (resolution) {
      case 'Need_Doctor':{
        if(this.checkedStates[0])
          this.localResolutions.push(new Resolution("Need_Doctor", new Date()))
        else
          this.localResolutions = []
        break;
      }
      case 'Need_Ophthalmologist':{
        if(this.checkedStates[1])
          this.localResolutions.push(new Resolution("Need_Ophthalmologist", new Date()))
        else
          this.localResolutions = []
        break;
      }
      case 'Need_Mammography':{
        if(this.checkedStates[2])
          this.localResolutions.push(new Resolution("Need_Mammography", new Date()))
        else
          this.localResolutions = []
        break;
      }
      case 'Need_Dentist':{
        if(this.checkedStates[3])
          this.localResolutions.push(new Resolution("Need_Dentist", new Date()))
        else
          this.localResolutions = []
        break;
      }
      case 'Need_Gynecologist':{
        if(this.checkedStates[4])
          this.localResolutions.push(new Resolution("Need_Gynecologist", new Date()))
        else
          this.localResolutions = []
        break;
      }
      case 'Need_Psychologist':{
        if(this.checkedStates[5])
          this.localResolutions.push(new Resolution("Need_Psychologist", new Date()))
        else
          this.localResolutions = []
        break;
      }
      default:
        break;
    }
  }

}
