import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service'; // de afuera
import { Role} from '../../Models/Role'; // de afuera
import { User} from '../../../../models/user';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  providers: [RoleService, UserService]
})
export class UserListComponent implements OnInit {
  public title;
  public identity;
  public token;
  public rol: Role;
  public roles: Role[];
  public users: User[];

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

  }

  ngOnInit() {
    console.log('token ' + this.token);
    this.getUsers();
  }
  getUsers() {
    this._userService.getUsers(this.token).subscribe(
      response => {
        if (response.status === 'success') {
          console.log('ok');
          this.users = response.data;
        }else {
          console.log('error de peticion');
        }
      }, error =>{
        console.log(<any>error);
      }
    );

  }

}
