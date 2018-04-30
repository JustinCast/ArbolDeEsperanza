import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { ShowPeopleComponent } from './show-people/show-people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { LogguedInGuard } from '../services/loggued-in.guard';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';
import { AddExpectativesComponent } from './add-people/add-expectatives/add-expectatives.component';
import { AddEducationComponent } from './add-people/add-education/add-education.component';
import { AddSocioeconomicComponent } from './add-people/add-socioeconomic/add-socioeconomic.component';
import { AddEmploynmentComponent } from './add-people/add-employnment/add-employnment.component';
import { AddHealthComponent } from './add-people/add-health/add-health.component';

const ROUTES: Routes = [
  {
    path: 'people', component: PeopleComponent,
      children: [
        { path: 'show-people', component: ShowPeopleComponent },
        { path: 'edit-person', component: EditPersonComponent, canActivate: [LogguedInGuard] },
        { path: 'show-details', component: ShowDetailsComponent },
        { path: 'resolutions', component: ResolutionsComponent, canActivate: [LogguedInGuard] },
      ]
    },
    { 
      path: 'add-person', component: AddPeopleComponent, canActivate: [LogguedInGuard],
        children: [
          { path: 'add-expectatives', component: AddExpectativesComponent },
          { path: 'add-education', component: AddEducationComponent },
          { path: 'add-socioeconomic', component: AddSocioeconomicComponent },
          { path: 'add-employnment', component: AddEmploynmentComponent },
          { path: 'add-health', component: AddHealthComponent }
        ] 
    },
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