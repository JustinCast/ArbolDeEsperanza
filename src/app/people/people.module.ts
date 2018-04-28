import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPeopleComponent } from './add-people/add-people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { HouseMember } from '../models/HouseMember';
import { ResolutionsComponent } from './resolutions/resolutions.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowPeopleComponent } from './show-people/show-people.component';
import { PeopleComponent } from './people.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AddPeopleComponent,
    EditPersonComponent,
    HouseMember,
    ResolutionsComponent,
    ShowDetailsComponent,
    ShowPeopleComponent,
    PeopleComponent,
    SharedModule
  ],
  exports: [
    PeopleComponent
  ],
  declarations: []
})
export class PeopleModule { }
