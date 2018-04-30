import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import 'hammerjs';
import { MatStepperModule } from '@angular/material/stepper';
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
  MatProgressBarModule,
  MatSlideToggleModule,
  MatCheckboxModule
} from '@angular/material';
import { SearchPersonPipe } from '../pipes/search-person.pipe';
import { SearchUserPipe } from '../pipes/search-user.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
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
    MatProgressBarModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MDBBootstrapModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    MatStepperModule
  ],
  exports: [
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
    MatProgressBarModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MDBBootstrapModule,
    FormsModule, 
    ReactiveFormsModule,
    SearchUserPipe,
    SearchPersonPipe,
    NgxPaginationModule,
    MatStepperModule
  ],
  declarations: [
    SearchUserPipe,
    SearchPersonPipe,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class SharedModule { }
