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
import { PeopleTableComponent } from './modals/people-table/people-table.component';
import { ExpectativesService } from '../services/expectatives.service';
import { DataService } from '../services/data.service';
import { AddExpectativesComponent } from './edit-person/add-expectatives/add-expectatives.component';
import { AddEducationComponent } from './edit-person/add-education/add-education.component';
import { AddSocioeconomicComponent } from './edit-person/add-socioeconomic/add-socioeconomic.component';
import { AddEmploynmentComponent } from './edit-person/add-employnment/add-employnment.component';
import { AddHealthComponent } from './edit-person/add-health/add-health.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationService } from '../services/education.service';
import { EmploynmentService } from '../services/employnment.service';
import { HealthService } from '../services/health.service';
import { SocioEconomicService } from '../services/socio-economic.service';


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
  ],
  providers: [
    ExpectativesService,
    DataService,
    EducationService,
    EmploynmentService,
    HealthService,
    SocioEconomicService
  ]
})
export class PeopleModule { }
