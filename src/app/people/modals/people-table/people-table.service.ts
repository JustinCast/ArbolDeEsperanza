import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PeopleTableComponent } from './people-table.component';

@Injectable()
export class PeopleTableService {

  constructor(
    private dialog: MatDialog
  ) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<PeopleTableComponent>
    dialogRef = this.dialog.open(PeopleTableComponent, {
        width: '250px',
        data: { name: 'Ups!' }
    }); 
    dialogRef.componentInstance.title = title
    dialogRef.componentInstance.message = message

    return dialogRef.afterClosed()
  }
}
