import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-yes-or-no',
  templateUrl: './yes-or-no.component.html',
  styleUrls: ['./yes-or-no.component.scss']
})
export class YesOrNoComponent implements OnInit {
  public title: string;
  public message: string;
  constructor(public dialogRef: MatDialogRef<YesOrNoComponent>) { }

  ngOnInit() {
    this.title = "Eliminar"
    this.message = "Está seguro que desea eliminar este usuario?"
  }

}
