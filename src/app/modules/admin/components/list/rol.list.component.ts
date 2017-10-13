import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service';
import { Role} from '../../Models/Role';

@Component({
  selector: 'admin-rol-list',
  templateUrl: './rol-list.component.html',
  providers: [RoleService, UserService]
})
export class RolListComponent implements OnInit {
  public title;
  public numbers = new Array(10);
  public identity;
  public token;
  public rol: Role;
  public roles: Role[];

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
        }else {
          console.log('error de peticion');
        }
      }, error =>{
        console.log(<any>error);
      }
    );

  }

}
