import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { stringify } from 'querystring';
@Injectable()
export class AuthenticationService {
  string = ''
  constructor(public _http: HttpClient) { 
  }

  login(username: string, password: string): any {
    return this._http.get<any>(`person/admin/getAdmin/${username}/${password}`)
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
