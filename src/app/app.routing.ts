import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowPeopleComponent } from './show-people/show-people.component';
import { GraphComponent } from './graph/graph.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { SettingsComponent } from './settings/settings.component';
import { PeopleComponent } from './people/people.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { LoginComponent } from './login/login.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { LogguedInGuard } from './services/loggued-in.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ShowUserComponent } from './show-user/show-user.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [LogguedInGuard]},
    {
        path: 'people', component: PeopleComponent,
            children: [
                { path: 'show-people', component: ShowPeopleComponent },
            ]
    },
    { path: 'add-person', component: AddPeopleComponent, canActivate: [LogguedInGuard] },
    { path: 'edit-person', component: EditPersonComponent, canActivate: [LogguedInGuard] },
    { path: 'add-user', component: AddUserComponent, canActivate: [LogguedInGuard] },
    { path: 'edit-user', component: EditUserComponent, canActivate: [LogguedInGuard] },
    { path: 'show-details', component: ShowDetailsComponent },
    { path: 'show-user-details', component: UserDetailsComponent },
    { path: 'graph', component: GraphComponent, canActivate: [LogguedInGuard]},
    { path: 'about', component: AboutComponent },
    { path: 'admin', component: AdminComponent, canActivate: [LogguedInGuard], 
            children: [
                { path: 'show-people', component: ShowUserComponent}
            ]},
    { path: 'settings', component: SettingsComponent, canActivate: [LogguedInGuard] },
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: '**', component: ErrorHandleComponent }
]