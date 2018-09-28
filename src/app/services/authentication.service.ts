import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../models/User";
@Injectable()
export class AuthenticationService {
  string = "";
  constructor(public _http: HttpClient) {}

  login(user: User): void {
    localStorage.setItem("logguedUser", JSON.stringify(user));
  }

  logout(): any {
    localStorage.removeItem("logguedUser");
  }

  getUser(): any {
    return localStorage.getItem("logguedUser");
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthenticationService, useClass: AuthenticationService }
];
