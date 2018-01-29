import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-house-members',
  templateUrl: './house-members.component.html',
  styleUrls: ['./house-members.component.scss']
})
export class HouseMembersComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HouseMembersComponent>,
    @Inject(MAT_DIALOG_DATA) public members: Array<any>) 
  { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
