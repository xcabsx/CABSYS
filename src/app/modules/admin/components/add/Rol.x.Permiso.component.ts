import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service'; // de afuera
import { Role} from '../../Models/Role'; // de afuera
import { User} from '../../../../models/user';
import { Permiso} from "../../Models/Permiso";
import { fundido1} from '../../../../animations/animation';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'admin-rol-x-permiso',
  templateUrl: './rol.x.permiso.component.html',
  providers: [RoleService, UserService],
  animations: [fundido1]
})
export class RolXPermisoComponent implements OnInit {
  public title;
  public identity;
  public token;
  public rol: Role;
  public roles: Role[];
  public users: User[];
  public permisos: Permiso[];
  public permisosxRol: Permiso[];
  public usersxRol: User[];
  public loading;
  public rolActivo;
  public loadingRol;


  constructor(
    private _userService: UserService,
    private _rolService: RoleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.rol = new Role(0, '', '', '', '');
    this.title = 'Asignar Permisos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
    this.loading = 'show';
    this.loadingRol = 'hide';
  }

  ngOnInit() {
    this.getpermisosXRol();
    console.log('permisos x rol init');

  }

  getpermisosXRol() {
    // this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._rolService.getPermisosxRol(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.permisosxRol = response.data;
            this.permisos = response.permisos;
            this.rolActivo = response.Rol;
            this.loading = 'hide';
            console.log(this.permisos);
          }else {
            //aca va error
            console.log(response.status );
            this._router.navigate(['/login']);
          }

        }, error => {
          console.log(<any>error);
        }
      );
    });
  }
  grabarRxp(idperm, estado) {
    this.loadingRol = 'show';
    this._route.params.forEach((params: Params) => {
      const idRol = +params['id'];
    //alert('id usuario: '+id+ ' id rol: '+ idRol);
    if (estado === 'OK') {// para saber si grabo o borro
        this._rolService.deleteRolesxPermisos(this.token, idRol , idperm).subscribe(
          response => {
            if (response.status === 'success') {
              this.loadingRol = 'hide';
              this.getpermisosXRol();
            }else {
              console.log('no anda');
            }
          }, error => {
            console.log(<any>error);
          });
    }else {
      this._rolService.saveRolesxPermisos(this.token, idRol , idperm).subscribe(
        response => {
          if (response.status === 'success') {
            this.loadingRol = 'hide';
            this.getpermisosXRol();
          }else {
            console.log('no anda');
          }
        }, error => {
        console.log(<any>error);
      });

    }
    });
  }
  volver() {
    window.history.back();
  }


}
