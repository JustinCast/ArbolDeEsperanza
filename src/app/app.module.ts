import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatCardModule,
  MatButtonModule,
  MatExpansionModule, 
  MatDialogModule,
  MatTableModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatIconModule,
  MatAutocompleteModule
} from '@angular/material';
// import { registerLocaleData } from '@angular/common';
// import es from '@angular/common/locales/Es';
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
import { PeopleService } from './show-people/people.service';
import { ManageEditorComponent } from './manage-editor/manage-editor.component';
import { HouseMembersComponent } from './house-members/house-members.component';
import { ShowPeopleComponent } from './show-people/show-people.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { PeopleComponent } from './people/people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { LoginComponent } from './login/login.component';
import { SearchFilterPipe } from "./show-people/SearchFilterPipe";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
    ManageEditorComponent,
    HouseMembersComponent,
    PeopleComponent,
    ShowPeopleComponent,
    AddPeopleComponent,
    EditPersonComponent,
    LoginComponent,
    SearchFilterPipe
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
    Ng2SearchPipeModule
  ],
  providers: [
    PeopleService
  ],
  entryComponents: [
    HouseMembersComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
