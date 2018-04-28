import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 

 } from "@angular/material";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    AddUserComponent,
    EditUserComponent,
    ShowUserComponent,
    UserDetailsComponent,
    UserComponent,
    SharedModule
  ],
  declarations: [
    
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
