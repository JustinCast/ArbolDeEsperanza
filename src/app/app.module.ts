import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatCardModule,
  MatButtonModule,
  MatExpansionModule, 
  MatDialogModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatIconModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatSnackBarModule,
  MatProgressBarModule
} from '@angular/material';
import { registerLocaleData } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
// import es from '@angular/common/locales/es';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { GraphComponent } from './graph/graph.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { ROUTES } from './app.routing';
import { SettingsComponent } from './settings/settings.component';

import { HouseMembersComponent } from './house-members/house-members.component';
import { ShowPeopleComponent } from './show-people/show-people.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { PeopleComponent } from './people/people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { LoginComponent } from './login/login.component';
import {MatTableModule} from '@angular/material/table';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {  } from "./show-people/";

import { YesOrNoComponent } from './yes-or-no/yes-or-no.component';
import { YesOrNoService } from './yes-or-no/yes-or-no.service';
import { PeopleService } from './services/people.service';
import { AUTH_PROVIDERS } from './services/authentication.service';
import { LogguedInGuard } from './services/loggued-in.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ShowAdminComponent } from './show-admin/show-admin.component';
// import { PersonFilterPipe } from './show-people/person-filter';
// registerLocaleData(es, 'Es');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    AboutComponent,
    GraphComponent,
    ErrorHandleComponent,
    SettingsComponent,
    HouseMembersComponent,
    PeopleComponent,
    ShowPeopleComponent,
    AddPeopleComponent,
    EditPersonComponent,
    LoginComponent,
    // PersonFilterPipe,
    ShowDetailsComponent,
    YesOrNoComponent,
    AddUserComponent,
    EditUserComponent,
    UserDetailsComponent,
    ShowAdminComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule,
    NgxPaginationModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [
    PeopleService,
    YesOrNoService,
    LogguedInGuard,
    AUTH_PROVIDERS
    // { provide: LOCALE_ID, useValue: 'es' }
  ],
  entryComponents: [
    HouseMembersComponent,
    YesOrNoComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
