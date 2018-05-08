import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ShowUserComponent } from './show-user/show-user.component';

@NgModule({
  imports: [
    CommonModule,
    UserDetailsComponent,
    ShowUserComponent
  ],
  declarations: []
})
export class UserModule { }
