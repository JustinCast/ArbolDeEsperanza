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
import { LogguedInGuard } from './auth/loggued-in.guard';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'people', component: PeopleComponent,
            children: [
                { path: 'show-people', component: ShowPeopleComponent },
            ]
    },
    { path: 'add-person', component: AddPeopleComponent },
    { path: 'edit-person', component: EditPersonComponent },
    { path: 'graph', component: GraphComponent},
    { path: 'show-details', component: ShowDetailsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'admin', component: AdminComponent, canActivate: [LogguedInGuard] },
    { path: 'settings', component: SettingsComponent },
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: '**', component: ErrorHandleComponent }
]