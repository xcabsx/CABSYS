import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService} from '../../services/user.service';
import { Router} from '@angular/router';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  providers: [UserService]

})
export class MenuSuperiorComponent implements OnInit, DoCheck {
  public token;
  public identity;
  public Bar;
  public Lubri;
  public Drugstore;
  public Estacion;

  constructor(
    private _userServices: UserService,
    private _router: Router
  ) {
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken2();
    this.Bar = false;
    this.Lubri = false;
    this.Drugstore = false;
    this.Estacion = false;
  }

  ngOnInit() {
  }
  ngDoCheck() { // aca se hace para que controle en cada cambio el usuario logeado
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken2();
    this.Bar = false;
    if (this.identity) {
    for (let i = 0 ; i < this.identity.Apls.length; i++) {
      if (this.identity.Apls[i].toString() === 'Bar') {
        this.Bar = true;
      }
      if (this.identity.Apls[i].toString() === 'Lubricentro') {
        this.Lubri = true;
      }
      if (this.identity.Apls[i].toString() === 'Drugstore') {
        this.Drugstore = true;
      }
      if (this.identity.Apls[i].toString() === 'Estacion') {
        this.Estacion = true;
      }
    }
    }

  }
  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/home']);
  }

}
