import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service'; // de afuera
import { Role} from '../../Models/Role'; // de afuera
import { User} from '../../../../models/user';
import { fundido1} from '../../../../animations/animation';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'admin-rol-x-user',
  templateUrl: './rol.x.user.component.html',
  providers: [RoleService, UserService],
  animations: [fundido1]
})
export class RolXUserComponent implements OnInit {
  public title;
  public identity;
  public token;
  public rol: Role;
  public roles: Role[];
  public users: User[];
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
    this.title = 'Asignar Roles';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
    this.loading = 'show';
    this.loadingRol = 'hide';
  }

  ngOnInit() {
    this.getuserXRol();

  }

  getuserXRol() {
    // this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._rolService.getUsersxRol(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.usersxRol = response.data;
            this.users = response.users;
            this.rolActivo = response.rol;
            this.loading = 'hide';
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
  grabarRxu(id, rol) {
    this.loadingRol = 'show';
    this._route.params.forEach((params: Params) => {
      const idRol = +params['id'];
    //alert('id usuario: '+id+ ' id rol: '+ idRol);
    if (rol === 'OK') {
        this._rolService.deleteRolesxUsers(this.token, idRol , id).subscribe(
          response => {
            if (response.status === 'success') {
              this.loadingRol = 'hide';
              this.getuserXRol();
            }else {
              console.log('no anda');
            }
          }, error => {
            console.log(<any>error);
          });
    }else {
      this._rolService.saveRolesxUsers(this.token, idRol , id).subscribe(
        response => {
          if (response.status === 'success') {
            this.loadingRol = 'hide';
            this.getuserXRol();
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
