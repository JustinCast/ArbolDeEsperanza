import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LogguedInGuard implements CanActivate {
  constructor(private authService: AuthenticationService) {}

  /**
   * 
   * @param next 
   * @param state 
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.isLoggedIn()
    console.log('canActivate', isLoggedIn)
    return isLoggedIn
  }
}
