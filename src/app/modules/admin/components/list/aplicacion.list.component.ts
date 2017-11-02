import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service';
import { Role} from '../../Models/Role';
import { fundido} from '../../../../animations/animation';
import { Aplicacion } from "../../Models/Aplicacion";


@Component({
  selector: 'admin-apl-list',
  templateUrl: './aplicacion.list.component.html',
  providers: [RoleService, UserService],
  animations: [ fundido]
})
export class AplicacionListComponent implements OnInit {
  public title;
  public numbers = new Array(10);
  public identity;
  public token;
  public aplicacion: Aplicacion;
  public aplicaciones: Aplicacion[];
  public roles: Role[];
  public loading;

  constructor(
    private _userService: UserService,
    private _rolService: RoleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.aplicacion = new Aplicacion(0, '' , '' , '' );
    this.title = 'Lista De Aplicaciones';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
    this.loading = 'show';

  }

  ngOnInit() {
    this.getAplicaciones();
  }
  getAplicaciones() {
    this._rolService.getAplicaciones(this.token).subscribe(
      response => {
        if (response.status === 'success') {
          console.log('ok'+ response.data);
          this.aplicaciones = response.data;
          this.loading = 'hide';
        }else {
          console.log('error de peticion');
        }
      }, error =>{
        console.log(<any>error);
      }
    );

  }

  deshabilitarAplicacion(aplid) {
      this._rolService.deshabilitarAplicacion(this.token, aplid).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.aplicacion = response.data;
            //this._router.navigate(['/admin-panel/listado']);
            // this.loading = 'hide';
            console.log("ok habilitar");
            this.getAplicaciones();
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
