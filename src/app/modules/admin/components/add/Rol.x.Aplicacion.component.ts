import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service'; // de afuera
import { Role} from '../../Models/Role'; // de afuera
import { Aplicacion} from "../../Models/Aplicacion";
import { User} from '../../../../models/user';
import { fundido1} from '../../../../animations/animation';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'admin-rol-x-apl',
  templateUrl: './rol.x.Aplicacion.html',
  providers: [RoleService, UserService],
  animations: [fundido1]
})
export class RolXAplicacionComponent implements OnInit {
  public aplXrol: Role[];
  public title;
  public identity;
  public token;
  public aplicacion: Aplicacion;
  public aplicaciones: Aplicacion[];
  public rol: Role;
  public roles: Role[];
  public users: User[];
  public usersxRol: User[];
  public loading;
  public aplActivo;
  public loadingRol;

  constructor(
    private _userService: UserService,
    private _rolService: RoleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.rol = new Role(0, '', '', '', '');
    this.title = 'Asignar Roles';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
    this.loading = 'show';
    this.loadingRol = 'hide';


  }

  ngOnInit() {
    console.log('token ' + this.token);
    //this.getUsers();
    this.getRolXApl();


  }

  getUsers() {
    this._userService.getUsers(this.token).subscribe(
      response => {
        if (response.status === 'success') {
          console.log('ok');
          console.log(this.usersxRol);
          this.users = response.data;
          this.loading = 'hide';
        }else {
          console.log('error de peticion');
        }
      }, error => {
        console.log(<any>error);
      }
    );

  }

  getRolXApl() {
    // this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._rolService.getRolesxaplicaciones(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.aplXrol = response.data;
            this.roles = response.roles;
            this.aplActivo = response.aplicacion;
            this.loading = 'hide';
          }else {
            console.log(response.status );
            this._router.navigate(['/login']);
          }

        }, error => {
          console.log(<any>error);
        }
      );
    });
  }
  grabarRxA(id, estado) {
    this.loadingRol = 'show';
    this._route.params.forEach((params: Params) => {
      const idApl = +params['id'];
        if (estado === 'OK') {
          console.log('estado OK');
        this._rolService.deleteRolesxApls(this.token, idApl , id).subscribe(
          response => {
            if (response.status === 'success') {
              this.loadingRol = 'hide';
              this.getRolXApl();
            }else {
              console.log('no anda');
            }
          }, error => {
            console.log(<any>error);
          });
    }else {
      this._rolService.saveRolesxapls(this.token, idApl , id).subscribe(
        response => {
          if (response.status === 'success') {
            this.loadingRol = 'hide';
            this.getRolXApl();
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
