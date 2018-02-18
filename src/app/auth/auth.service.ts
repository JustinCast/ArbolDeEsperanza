import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AuthComponent } from './auth.component';

@Injectable()
export class AuthService {
  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<AuthComponent>
    dialogRef = this.dialog.open(AuthComponent, {
        width: '70%',
        data: { name: 'Ups!' }
    }); 
    dialogRef.componentInstance.title = title
    dialogRef.componentInstance.message = message

    return dialogRef.afterClosed()
  }

}