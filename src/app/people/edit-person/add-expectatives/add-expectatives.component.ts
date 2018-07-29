import { Component, OnInit } from "@angular/core";
import { Person } from "../../../models/Person";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Expectatives } from "../../../models/Expectatives";
import { ExpectativesService } from "../../../services/expectatives.service";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "app-add-expectatives",
  templateUrl: "./add-expectatives.component.html",
  styleUrls: ["./add-expectatives.component.scss"]
})
export class AddExpectativesComponent implements OnInit {
  expectatives: Expectatives;
  person: Person;
  expectativesGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private expectativesService: ExpectativesService,
    public data: DataService
  ) {
    this.expectativesGroup = this._fb.group({
      hearAboutWay: ["", Validators.required],
      whatYouKnow: ["", Validators.required],
      entryReason: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem("person"));
    this.expectatives = new Expectatives("jjj", "", "", this.person._id);
    this.expectativesService.verifyExistency(this.person._id);
  }

  onSubmit() {
    if (!this.expectativesService.existency)
      this.expectativesService.saveExpectative(this.expectatives);
    else this.expectativesService.updateExpectative(this.expectatives);
  }
}
