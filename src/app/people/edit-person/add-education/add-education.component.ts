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
    this.educationService.getEducationByPersonID(this.person._id)
    .subscribe(
      success => {
        if(success.Read !== undefined)
          this.education = success[0]
        console.log(success)
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
          this.openSnackBar(`Error al ingresar el documento`, 'Ok', 'red-snackbar')
        }
      }
    )
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

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }

}
