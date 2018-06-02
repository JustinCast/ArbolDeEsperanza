import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPeopleComponent } from './add-people/add-people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowPeopleComponent } from './show-people/show-people.component';
import { PeopleComponent } from './people.component';
import { SharedModule } from '../shared/shared.module';
import { HouseMembersComponent } from './house-members/house-members.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PeopleRoutingModule } from './people.routing.module';
import { AddExpectativesComponent } from './add-people/add-expectatives/add-expectatives.component';
import { AddEducationComponent } from './add-people/add-education/add-education.component';
import { AddSocioeconomicComponent } from './add-people/add-socioeconomic/add-socioeconomic.component';
import { AddEmploynmentComponent } from './add-people/add-employnment/add-employnment.component';
import { AddHealthComponent } from './add-people/add-health/add-health.component';
import { PersonalInformationComponent } from './add-people/personal-information/personal-information.component';
import { PeopleTableComponent } from './modals/people-table/people-table.component';


@NgModule({
  declarations: [    
    AddPeopleComponent,
    EditPersonComponent,
    HouseMembersComponent,
    ResolutionsComponent,
    ShowDetailsComponent,
    ShowPeopleComponent,
    PeopleComponent,
    AddExpectativesComponent,
    AddEducationComponent,
    AddSocioeconomicComponent,
    AddEmploynmentComponent,
    AddHealthComponent,
    PersonalInformationComponent,
    PeopleTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    PeopleRoutingModule
  ],
  exports: [
    PeopleComponent,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class PeopleModule { }
