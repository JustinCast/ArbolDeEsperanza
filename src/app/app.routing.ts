import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { GraphComponent } from './graph/graph.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';

export const ROUTES: Routes = [
    {
        path: '', component: HomeComponent, pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'person', component: PersonComponent
    },
    {
        path: 'graph', component: GraphComponent
    },
    {   
        path: 'about', component: AboutComponent
    },
    {
        path: 'admin', component: AdminComponent
    },
    {
        path: '**', component: ErrorHandleComponent
    }
]