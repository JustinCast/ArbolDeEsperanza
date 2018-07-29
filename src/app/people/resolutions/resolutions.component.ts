import { Component, OnInit } from "@angular/core";

import { Location } from "@angular/common";
import { Person } from "../../models/Person";
import { Resolution } from "../../models/Resolution";
import { PeopleService } from "../../services/people.service";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute } from "@angular/router";
import { HealthService } from "../../services/health.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Health } from "../../models/Health";
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from "@angular/material";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { TIME_FORMATS } from "../../models/TimeFormats";

@Component({
  selector: "app-resolutions",
  templateUrl: "./resolutions.component.html",
  styleUrls: ["./resolutions.component.scss"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: TIME_FORMATS }
  ]
})
export class ResolutionsComponent implements OnInit {
  public resolutionDate: Date = new Date();
  public health: Health;
  public loading: boolean = true;
  personID: string;
  localResolutions: Array<Resolution> = []; // esto es para evitar que se ingresen resoluciones no deseadas
  checkedStates: Array<boolean> = new Array<boolean>(6);
  constructor(
    public peopleService: PeopleService,
    private route: ActivatedRoute,
    private _location: Location,
    private HealthService: HealthService
  ) {}

  ngOnInit() {
    this.personID = this.route.snapshot.paramMap.get("id");
    this.makeHealthRequest();
  }

  makeHealthRequest() {
    this.HealthService.getHealthByPersonID(this.personID).subscribe(
      success => {
        this.health = success[0];
        this.loading = false;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log("An error occurred:", err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(
            `Backend returned code ${err.status}, body was: ${JSON.stringify(
              err.error
            )}`
          );
          this.HealthService.openSnackBar(
            `Error al ingresar el documento`,
            "Ok",
            "red-snackbar"
          );
        }
      }
    );
  }

  backClicked() {
    this._location.back();
  }

  makeResolution(list) {
    list.selectedOptions.selected.map(item => {
      this.health.Resolutions.push(
        new Resolution(item.value, this.resolutionDate)
      );
      switch (String(item.value)) {
        case "Need_Doctor":
          this.health.Need.Need_Doctor = false;
          break;
        case "Need_Ophthalmologist":
          this.health.Need.Need_Ophthalmologist = false;
          break;
        case "Need_Mammography":
          this.health.Need.Need_Mammography = false;
          break;
        case "Need_Dentist":
          this.health.Need.Need_Dentist = false;
          break;
        case "Need_Gynecologist":
          this.health.Need.Need_Gynecologist = false;
          break;
        case "Need_Psychologist":
          this.health.Need.Need_Psychologist = false;
          break;
        default:
          break;
      }
    });
    this.HealthService.updateHealthDoc(this.health);
  }
}
