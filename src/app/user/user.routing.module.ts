import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LogguedInGuard } from '../services/loggued-in.guard';
import { UserDetailsComponent } from './user-details/user-details.component';

const ROUTES: Routes = [
  {
    path: 'users', component: UserComponent,
      children: [
        { path: 'add-user', component: AddUserComponent, canActivate: [LogguedInGuard] },
        { path: 'edit-user', component: EditUserComponent, canActivate: [LogguedInGuard] },
        { path: 'show-user-details', component: UserDetailsComponent },
      ]
  }
]

@NgModule({
    imports: [
      RouterModule.forChild(ROUTES)
    ],
    exports: [
      RouterModule
    ]
})

export class UserRoutingModule {
    
}