import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { EducationService } from '../../../services/education.service';
import { Education } from '../../../models/Education';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

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
    public data: DataService,
    private educationService: EducationService,
    private snackBar: MatSnackBar
  ) { 
    this.educationGroup = this._fb.group({
      'read': ['', Validators.required],
      'educationBackground': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('person'))
    this.education = new Education(false, '', [], this.person._id)
    this.educationService.verifyExistency(this.person._id)
  }

  onSubmit(){
    if(!this.educationService.existency)
      this.educationService.saveEducationDoc(this.education)
    else
      this.educationService.updateEducationDoc(this.education)
  }

  addCourse(course: string) {
    if(course.length !== 0)
      this.education.Courses.unshift(course)
    else
      this.openSnackBar('Debe agregar el nombre de un curso', 'Ok', 'red-snackbar')
  }

  deleteCourse(index: number) {
    this.education.Courses.splice(index, 1)
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }

}
