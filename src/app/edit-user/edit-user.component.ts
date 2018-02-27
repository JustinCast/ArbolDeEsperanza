import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  usersRole = [
    'Admin',
    'Editor',
    'NormalUser'
  ]
  user: User
  userFG: FormGroup
  constructor(
    private _fb: FormBuilder
  ) { 
    this.userFG = this._fb.group({
      "UserName": ['', Validators.required],
      "Password": ['', Validators.required],
      "Role": ['', Validators.required]
    })
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('editUser'))
  }

  resetForm() {
    if(this.userFG !== undefined)
      this.userFG.reset()
  }

}
