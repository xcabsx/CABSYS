import { Component, OnInit} from '@angular/core';
import {fundido} from '../../animation';
import { UserService} from '../../../../services/user.service';


@Component({
  selector: 'admin-bar-sidebar',
  templateUrl: './sidebar.component.html',
  animations: [ fundido]
})
export class BarsidebarComponent implements OnInit {
  title = 'Menu';
  public vender;
  public pedidos;
  public administrar;
  public cocina;

  constructor(
    private _userservice: UserService
  ) {
    this.identity = this._userservice.getIdentity();
    this.vender = false;
    this.pedidos = false;
    this.administrar = false;
    this.cocina = false;
  }
  volver() {
    window.history.back();
  }

  ngOnInit() {
        if (this.identity) {
        for (let i = 0 ; i < this.identity.Permisos.length; i++) {
        if (this.identity.Permisos[i].toString() === 'Bar-mozo'  ) {
        this.vender = true;
      }
      if (this.identity.Permisos[i].toString() === 'Bar-mozo') {
        this.pedidos = true;
      }
      if (this.identity.Permisos[i].toString() === 'Bar-Encargado') {
        this.cocina = true;
      }
      if (this.identity.Permisos[i].toString() === 'Bar-gerente') {
        this.administrar = true;
      }
      }
      }
  }
}
