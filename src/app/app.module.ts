import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
// import es from '@angular/common/locales/es';
import 'hammerjs';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { ROUTES } from './app.routing';

import { LoginComponent } from './login/login.component';
import {MatTableModule} from '@angular/material/table';
import { YesOrNoComponent } from './modals/yes-or-no/yes-or-no.component';
import { LogguedInGuard } from './services/loggued-in.guard';
import { YesOrNoService } from './modals/yes-or-no/yes-or-no.service';
import { AUTH_PROVIDERS } from './services/authentication.service';
import { PeopleService } from './services/people.service';
import { PeopleModule } from './people/people.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
// registerLocaleData(es, 'Es');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent,
    ErrorHandleComponent,
    LoginComponent,
    YesOrNoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    PeopleModule,
    UserModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    PeopleService,
    YesOrNoService,
    LogguedInGuard,
    AUTH_PROVIDERS,
    DataService
    // { provide: LOCALE_ID, useValue: 'es' }
  ],
  exports: [
  ],
  entryComponents: [
    YesOrNoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
