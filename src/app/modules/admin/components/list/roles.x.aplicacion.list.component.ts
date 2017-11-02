import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service'; // de afuera
import { Role} from '../../Models/Role'; // de afuera
import { Aplicacion} from "../../Models/Aplicacion";
import { User} from '../../../../models/user';
import { Permiso} from '../../Models/Permiso';

@Component({
  selector: 'admin-rxa-list',
  templateUrl: './roles.x.aplicacion.list.component.html',
  providers: [RoleService, UserService]
})
export class RolesXAplicacionListComponent implements OnInit {
  @Input() idIn: string;
  @Input() edit: string;
  public title;
  public identity;
  public token;
  public rol1: Role;
  public aplicacion: Aplicacion;
  public aplicaciones: Aplicacion[];
  public roles1: Role[];
  public rolDescripcion;


  constructor(
    private _userService: UserService,
    private _rolService: RoleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    this.title = 'Roles ' ;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();

  }

  ngOnInit() {

    this.getRolesxAplicacion();
  }
  getRolesxAplicacion() {
    // this.loading = 'show';
    if (this.idIn) {

      this._rolService.getRolessxaplicacion(this.token, this.idIn).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.roles1 = response.data;
            console.log('los roles' + this.roles1);

          }else {
            console.log(response.status );
            this._router.navigate(['/login']);
          }

        }, error => {
          console.log(<any>error);
        }
      );

    }else {
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      console.log('va id= ' + id );
      this._rolService.getRolessxaplicacion(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            this.roles1 = response.data;
            console.log(this.roles1);
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
  }
  quitarRol(rolid, userid) {
    this._rolService.deleteRolesxUsers(this.token, rolid , userid).subscribe(
      response => {
        if (response.status === 'success') {
          //  this.loadingRol = 'hide';
          this.getRolesxAplicacion();
        }else {
          console.log('no anda');
        }
      }, error => {
        console.log(<any>error);
      });
  }

  volver() {
    window.history.back();
  }

}
