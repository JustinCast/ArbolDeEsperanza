import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Location } from "@angular/common";
import { FormGroup } from "@angular/forms";

import { Person } from "../../models/Person";
import { PeopleService } from "../../services/people.service";

@Component({
  selector: "app-add-people",
  templateUrl: "./add-people.component.html",
  styleUrls: ["./add-people.component.scss"]
})
export class AddPeopleComponent implements OnInit, AfterViewChecked {
  person: Person;
  personGroup: FormGroup;
  panelOpenState: boolean = false;
  icon: string = "close";
  houseMember: any = {};
  bornYear: number;
  houseMembers = [];
  supportInstitutions = [];
  medicationList = [];
  constructor(
    public peopleService: PeopleService,
    private _location: Location
  ) {}

  onSubmit() {}

  ngOnInit() {
    localStorage.setItem("addedInProcess", JSON.stringify(this.person));
  }

  backClicked() {
    this._location.back();
  }

  ngAfterViewChecked() {}

  addSupportInstitution(institution: string) {
    if (institution.length !== 0) {
      this.supportInstitutions.unshift(institution);
    }
  }

  deleteSupportInstitution(index: number) {
    this.supportInstitutions.splice(index, 1);
  }

  addMedication(medication: string) {
    if (medication.length !== 0) {
      this.medicationList.unshift(medication);
    }
  }

  deleteMedication(index: number) {
    this.medicationList.splice(index, 1);
  }

  addHouseMember() {
    console.log(this.houseMember);
    if (
      "fullName" in this.houseMember &&
      "age" in this.houseMember &&
      "clientRelationship" in this.houseMember &&
      "occupation" in this.houseMember &&
      "organizationState" in this.houseMember
    ) {
      this.houseMembers.unshift(this.houseMember);
      this.houseMember = {};
      return;
    }
    alert("Asegúrese de completar los campos!");
  }

  deleteHouseMember(index: number) {
    this.houseMembers.splice(index, 1);
  }
}
