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

@NgModule({
  declarations: [    
    AddPeopleComponent,
    EditPersonComponent,
    HouseMembersComponent,
    ResolutionsComponent,
    ShowDetailsComponent,
    ShowPeopleComponent,
    PeopleComponent
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
