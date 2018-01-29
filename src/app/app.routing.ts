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

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'people', component: PeopleComponent,
            children: [
                { path: 'show-people', component: ShowPeopleComponent },
                { path: 'add-person', component: AddPeopleComponent },
            ]
    },
    {path: 'graph', component: GraphComponent},
    {path: 'about', component: AboutComponent},
    {
        path: 'admin', component: AdminComponent
    },
    {path: 'settings', component: SettingsComponent},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: '**', component: ErrorHandleComponent}
]