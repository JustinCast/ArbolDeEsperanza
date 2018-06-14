import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { EducationService } from '../../../services/education.service';
import { Education } from '../../../models/Education';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {
  person: Person
  educationGroup: FormGroup
  education: Education
  constructor(
    private _fb: FormBuilder,
    private data: DataService,
    private educationService: EducationService
  ) { 
    this.educationGroup = this._fb.group({
      'read': ['', Validators.required],
      'educationBackground': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('person'))
    this.education = new Education(false, '', [], this.person._id)
  }

  onSubmit(){
    this.educationService.saveEducationDoc(this.education)
  }

  addCourse(course: string) {
    this.education.Courses.unshift(course)
  }

  deleteCourse(index: number) {
    this.education.Courses.splice(index, 1)
  }

}
