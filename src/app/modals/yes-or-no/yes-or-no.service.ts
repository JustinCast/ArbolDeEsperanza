import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { YesOrNoComponent } from './yes-or-no.component';
import { Observable } from 'rxjs';

@Injectable()
export class YesOrNoService {
  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<YesOrNoComponent>
    dialogRef = this.dialog.open(YesOrNoComponent, {
        width: '250px',
        data: { name: 'Ups!' }
    }); 
    dialogRef.componentInstance.title = title
    dialogRef.componentInstance.message = message

    return dialogRef.afterClosed()
  }
}
