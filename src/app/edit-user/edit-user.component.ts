import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [UserService]
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
    private _fb: FormBuilder,
    private userService: UserService
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

  updateUser(){
    this.userService.updateUser(this.user)
  }

  resetForm() {
    if(this.userFG !== undefined)
      this.userFG.reset()
  }

}
