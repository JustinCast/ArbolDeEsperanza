import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { ShowPeopleComponent } from './show-people/show-people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { LogguedInGuard } from '../services/loggued-in.guard';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';

const ROUTES: Routes = [
  {
    path: 'people', component: PeopleComponent,
      children: [
        { path: 'show-people', component: ShowPeopleComponent },
        { path: 'add-person', component: AddPeopleComponent, canActivate: [LogguedInGuard] },
        { path: 'edit-person', component: EditPersonComponent, canActivate: [LogguedInGuard] },
        { path: 'show-details', component: ShowDetailsComponent },
        { path: 'resolutions', component: ResolutionsComponent, canActivate: [LogguedInGuard] },
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

export class PeopleRoutingModule {
    
}