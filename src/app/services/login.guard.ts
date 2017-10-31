import { Injectable} from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { UserService} from "./user.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginGuard implements CanActivate {
  public token;
  public resultado;

  constructor(
    private _router: Router,
    private _userservice: UserService
  ) {
    this.token = this._userservice.getToken2();

  }
  canActivate(): Observable<boolean>|boolean {
    return this._userservice.comprobarLogin(this.token).map(
      response => {
        if(response.code == 200) {
          return true;
        }else {
          return false;
        }
      }, error => {
        console.log(<any>error );
      }
    );

  }
}

