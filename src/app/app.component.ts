import { Component } from '@angular/core';
// import { AuthService } from './services/auth.service';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    // public _auth: AuthService,
    public _authentication: AuthenticationService,
    public router: Router
  ){}

  // loginDialog(): void {
  //   if(this._authentication.isLoggedIn()){
  //     this.router.navigate(['admin'])
  //     return
  //   }
  //   else {
  //     this._auth
  //     .confirm('', '')
  //     .subscribe(result =>{
  //       console.log(result)
  //     })
  //   }
  // }

  // logout(): boolean {
  //   this._authentication.logout();
  //   return false;
  // }
}
