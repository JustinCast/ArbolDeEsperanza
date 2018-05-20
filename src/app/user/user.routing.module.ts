import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LogguedInGuard } from '../services/loggued-in.guard';
import { UserDetailsComponent } from './user-details/user-details.component';

const ROUTES: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'show-user-details', component: UserDetailsComponent },
  { path: 'add-user', component: AddUserComponent, canActivate: [LogguedInGuard] },
  { path: 'edit-user', component: EditUserComponent, canActivate: [LogguedInGuard] }
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