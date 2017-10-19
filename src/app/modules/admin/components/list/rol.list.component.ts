import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service';
import { Role} from '../../Models/Role';
import { fundido} from '../../../../animations/animation';


@Component({
  selector: 'admin-rol-list',
  templateUrl: './rol-list.component.html',
  providers: [RoleService, UserService],
  animations: [ fundido]
})
export class RolListComponent implements OnInit {
  public title;
  public numbers = new Array(10);
  public identity;
  public token;
  public rol: Role;
  public roles: Role[];
  public loading;

  constructor(
    private _userService: UserService,
    private _rolService: RoleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.rol = new Role(0, '', '', '', '');
    this.title = 'Lista De Roles';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
    this.loading = 'show';

  }

  ngOnInit() {
    console.log('token ' + this.token);
    this.getRoles();
  }
  getRoles() {
    this._rolService.getRoles(this.token).subscribe(
      response => {
        if (response.status === 'success') {
          console.log('ok');
          this.roles = response.data;
          this.loading = 'hide';
        }else {
          console.log('error de peticion');
        }
      }, error =>{
        console.log(<any>error);
      }
    );

  }

  deshabilitarRol(rolid) {
      this._rolService.deshabilitarRol(this.token, rolid).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.rol = response.data;
            //this._router.navigate(['/admin-panel/listado']);
            // this.loading = 'hide';
            console.log("ok habilitar");
            this.getRoles();
          }else {
            //aca va error
            console.log("error activar:" + response.status );
            //this._router.navigate(['/login']);
          }

        }, error => {
          console.log(<any>error);
        }
      );

  }

}
