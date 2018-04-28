import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
// import es from '@angular/common/locales/es';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GraphComponent } from './graph/graph.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { ROUTES } from './app.routing';

import { LoginComponent } from './login/login.component';
import {MatTableModule} from '@angular/material/table';
import { YesOrNoComponent } from './modals/yes-or-no/yes-or-no.component';
import { SearchUserPipe } from './pipes/search-user.pipe';
import { SearchPersonPipe } from './pipes/search-person.pipe';
import { LogguedInGuard } from './services/loggued-in.guard';
import { YesOrNoService } from './modals/yes-or-no/yes-or-no.service';
import { AUTH_PROVIDERS } from './services/authentication.service';
import { PeopleService } from './services/people.service';
import { PeopleModule } from './people/people.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
// registerLocaleData(es, 'Es');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    GraphComponent,
    ErrorHandleComponent,
    LoginComponent,
    YesOrNoComponent,
    SearchUserPipe,
    SearchPersonPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    PeopleModule,
    UserModule,
    SharedModule
  ],
  providers: [
    PeopleService,
    YesOrNoService,
    LogguedInGuard,
    AUTH_PROVIDERS
    // { provide: LOCALE_ID, useValue: 'es' }
  ],
  entryComponents: [
    YesOrNoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
