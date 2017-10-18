import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service'; // de afuera
import { Role} from '../../Models/Role'; // de afuera
import { User} from '../../../../models/user';
import { Permiso} from '../../Models/Permiso';

@Component({
  selector: 'admin-permisos-list',
  templateUrl: './permisos.list.component.html',
  providers: [RoleService, UserService]
})
export class PermisosListComponent implements OnInit {
  public title;
  public identity;
  public token;
  public permiso: Permiso;
  public permisos: Permiso[];
  public rolDescripcion;

  constructor(
    private _userService: UserService,
    private _rolService: RoleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    this.title = 'Permisos del Rol ' ;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();

  }

  ngOnInit() {
    console.log('token ' + this.token);
    this.getPermisosxRol();

  }
  getPermisosxRol() {
    // this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._rolService.getPermisosxRol(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.permisos = response.data;
            this.rolDescripcion = response.Rol;
            // this.loading = 'hide';
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
  volver() {
    window.history.back();
  }

}
