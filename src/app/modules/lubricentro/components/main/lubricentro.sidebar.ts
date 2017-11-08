import { Component, OnInit} from '@angular/core';
import {fundido} from '../../animation';
import { UserService} from '../../../../services/user.service';



@Component({
  selector: 'admin-lubricentro-sidebar',
  templateUrl: './lubricentro.sidebar.html',
  animations: [ fundido]
})
export class LubricentroSidebarComponent implements OnInit {
  title = 'Menu';
  public productos;
  public proveedores;
  public venta;
  public administracion;
  public identity;

  constructor(
    private _userservice: UserService
  ) {
    this.identity = this._userservice.getIdentity();
    this.productos = true;
    this.proveedores = true;
    this.venta = true;
    this.administracion = true;
  }
  volver() {
    window.history.back();
  }

 ngOnInit() {
        if (this.identity) {
        for (let i = 0 ; i < this.identity.Permisos.length; i++) {
        if (this.identity.Permisos[i].toString() === 'Lubri-vendedor'  ) {
        this.productos = true;
      }
      if (this.identity.Permisos[i].toString() === 'Lubri-encargado') {
        this.proveedores = true;
      }
      if (this.identity.Permisos[i].toString() === 'Lubri-vendedor') {
        this.venta = true;
      }
      if (this.identity.Permisos[i].toString() === 'Lubri-gerente') {
        this.administracion = true;
      }
      }
      }
  }
}
