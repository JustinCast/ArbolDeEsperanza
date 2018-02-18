import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { stringify } from 'querystring';
@Injectable()
export class AuthenticationService {
  string = ''
  constructor(public _http: HttpClient) { 
  }

  login(username: string, password: string): boolean {
    let authorization: boolean = false
    this._http.get<string>(`person/admin/getAdminByUserName/${username}`)
      .subscribe(
        success => {
          if(password === success)
            authorization = true
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log(`Backend returned code ${err.status}, body was: ${stringify(err.error)}`);
          }
        }
      )
    return authorization
  }

  logout(): any {
    localStorage.removeItem('username')
  }

  getUser(): any {
    return localStorage.getItem('username')
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null
  }

}
export const AUTH_PROVIDERS: Array<any> = [
  {provide: AuthenticationService, useClass: AuthenticationService}
]
