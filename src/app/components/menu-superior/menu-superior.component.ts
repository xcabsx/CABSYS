import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  providers: [UserService]

})
export class MenuSuperiorComponent implements OnInit, DoCheck {
  public token;
  public identity;

  constructor(
    private _userServices: UserService,
    private _router: Router
  ) {
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken2();
  }

  ngOnInit() {
  }
  ngDoCheck() { // aca se hace para que controle en cada cambio el usuario logeado
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken2();
  }
  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/home']);
  }

}
