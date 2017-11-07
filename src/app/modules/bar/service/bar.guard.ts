import { Injectable} from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { UserService} from '../../../services/user.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BarGuard implements CanActivate {
  public token;
  public resultado;

  constructor(
    private _router: Router,
    private _userservice: UserService
  ) {
    this.token = this._userservice.getToken2();
  }
  canActivate(): Observable<boolean>|boolean {
    return this._userservice.comprobarPermiso(this.token, 5).map(
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

    /*if ( identity && identity.role === 'user') {
      return true;
    }else {
      this._router.navigate(['/home']);
      return false;
    }*/


}

