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
} from '@angular/material';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/Es';
import 'hammerjs';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { PersonComponent } from './person/person.component';
import { AboutComponent } from './about/about.component';
import { GraphComponent } from './graph/graph.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { ROUTES } from './app.routing';
import { SettingsComponent } from './settings/settings.component';
import { PersonService } from './person/person.service';
import { ManagePeopleComponent } from './manage-people/manage-people.component';
import { ManageEditorComponent } from './manage-editor/manage-editor.component';
import { HouseMembersComponent } from './house-members/house-members.component';

registerLocaleData(es, 'Es');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    PersonComponent,
    AboutComponent,
    GraphComponent,
    ErrorHandleComponent,
    SettingsComponent,
    ManagePeopleComponent,
    ManageEditorComponent,
    HouseMembersComponent
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
  ],
  providers: [
    PersonService
  ],
  entryComponents: [
    HouseMembersComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
