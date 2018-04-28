import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { LogguedInGuard } from './services/loggued-in.guard';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [LogguedInGuard] },
    { path: 'people', component: PeopleComponent },
    { path: 'graph', component: GraphComponent, canActivate: [LogguedInGuard] },
    { path: 'about', component: AboutComponent },
    { path: 'user', component: UserComponent, canActivate: [LogguedInGuard] },
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: '**', component: ErrorHandleComponent }
]