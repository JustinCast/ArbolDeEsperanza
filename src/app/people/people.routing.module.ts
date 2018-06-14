import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { ShowPeopleComponent } from './show-people/show-people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { LogguedInGuard } from '../services/loggued-in.guard';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AddExpectativesComponent } from './edit-person/add-expectatives/add-expectatives.component';
import { AddEducationComponent } from './edit-person/add-education/add-education.component';
import { AddSocioeconomicComponent } from './edit-person/add-socioeconomic/add-socioeconomic.component';
import { AddEmploynmentComponent } from './edit-person/add-employnment/add-employnment.component';
import { AddHealthComponent } from './edit-person/add-health/add-health.component';

const ROUTES: Routes = [
  {
    path: 'people', component: PeopleComponent,
      children: [
        { path: 'show-people', component: ShowPeopleComponent },
        { path: 'resolutions', component: ResolutionsComponent, canActivate: [LogguedInGuard] },
      ]
  },
  { path: 'edit-person/:index', component: EditPersonComponent, canActivate: [LogguedInGuard] },
  { path: 'show-details', component: ShowDetailsComponent },
  { path: 'personal-information/:type', component: PersonalInformationComponent },
  { path: 'add-expectatives/:index', component: AddExpectativesComponent },
  { path: 'add-education', component: AddEducationComponent },
  { path: 'add-socioeconomic', component: AddSocioeconomicComponent },
  { path: 'add-employnment', component: AddEmploynmentComponent },
  { path: 'add-health', component: AddHealthComponent }
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