import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service'; // de afuera
import { Role} from '../../Models/Role'; // de afuera
import { User} from '../../../../models/user';
import { fundido1} from '../../../../animations/animation';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  providers: [RoleService, UserService],
  animations: [fundido1]
})
export class UserListComponent implements OnInit {
  public title;
  public identity;
  public token;
  public rol: Role;
  public user: User;
  public roles: Role[];
  public users: User[];
  public loading;
  public filtro;

  constructor(
    private _userService: UserService,
    private _rolService: RoleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.rol = new Role(0, '', '', '', '');
    this.title = 'Lista De Usuarios';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
    this.loading = 'show';
    this.filtro = 'Todos';

  }

  ngOnInit() {
    console.log('token ' + this.token);
    this.getUsers();
  }
  getUsers() {
    this._userService.getUsers(this.token).subscribe(
      response => {
        if (response.status === 'success') {
          this.users = response.data;
          this.loading = 'hide';
          if (this.filtro === 'Activos') {
            this.users = this.users.filter(function(user){
              return user.estado === 'Activo';
            });
          }else if (this.filtro === 'Inactivos') {
            this.users = this.users.filter(function(user){
              return user.estado === 'Inactivo';
            });
          }
          console.log('prueba status..' + this.users);

        }else {
          console.log('error de peticion');
        }
      }, error =>{
        console.log(<any>error);
      }
    );

  }
  filtrar(event) {
    console.log(event);
    this.filtro = event;
    this.getUsers();

  }

  deshabilitarUser(userid) {
    this._userService.deshabilitarUser(this.token, userid).subscribe(
      response => {

        if (response.status === 'success') {
          // podemos ver la tarea
          this.user = response.data;
          //this._router.navigate(['/admin-panel/listado']);
          // this.loading = 'hide';
          console.log("ok habilitar");
          this.getUsers();
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
