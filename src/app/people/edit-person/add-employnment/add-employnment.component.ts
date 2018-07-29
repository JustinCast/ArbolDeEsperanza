import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Person } from "../../../models/Person";
import { DataService } from "../../../services/data.service";
import { Employnment } from "../../../models/Employnment";
import { EmploynmentService } from "../../../services/employnment.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-add-employnment",
  templateUrl: "./add-employnment.component.html",
  styleUrls: ["./add-employnment.component.scss"]
})
export class AddEmploynmentComponent implements OnInit {
  employnmentGroup: FormGroup;
  person: Person;
  employnment: Employnment;
  addedClients: Array<string> = new Array();
  constructor(
    private _fb: FormBuilder,
    public data: DataService,
    public employnmentService: EmploynmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem("person"));
    this.employnment = new Employnment(
      "",
      "",
      "",
      "",
      "",
      undefined,
      "",
      "",
      undefined,
      0,
      [],
      this.person._id
    );
    this.employnmentGroup = this._fb.group({
      doYouHaveWork: [""],
      occupation: [""],
      unemploynmentReason: [""],
      unemploymentDate: [""],
      workFrecuency: [""],
      workFewHours: [""],
      whyWorkFewHours: [""],
      whyIsItImposible: [""],
      haveABusiness: [""],
      sellProducts: [""],
      clients: [""]
    });
    this.employnmentService.verifyExistency(this.person._id);
  }

  addClient(client: any) {
    if (client.length !== 0) this.addedClients.unshift(client);
    else this.openSnackBar("El campo cliente está vacío", "Ok", "red-snackbar");
  }

  deleteClient(index: number) {
    this.addedClients.splice(index, 1);
  }
  onSubmit() {
    if (!this.employnmentService.existency)
      this.employnmentService.saveEmploynmentDoc(this.employnment);
    else this.employnmentService.updateEmploynmentDoc(this.employnment);
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      extraClasses: [cssClass]
    });
  }
}
