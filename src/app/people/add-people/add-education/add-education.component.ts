import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {
  person: Person
  educationGroup: FormGroup
  constructor(
    private _fb: FormBuilder,
    private data: DataService
  ) { 
    this.educationGroup = this._fb.group({
      'read': ['', Validators.required],
      'educationBackground': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('addedInProcess'))
  }

  addCourse(course: string) {
    this.person.Education.Courses.unshift(course)
  }

  //TODO: recordar guardar en el localStorage a la pesona
  onSubmit() {}
}