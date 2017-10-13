import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RoleService} from '../../service/Role.service';
import { UserService} from '../../../../services/user.service';
import { Role} from '../../Models/Role';

@Component({
  selector: 'admin-rol-add',
  templateUrl: './rol.add.html',
  providers: [RoleService, UserService]
})
export class RolAddComponent implements OnInit {
  public title;
  public identity;
  public token;
  public rol: Role;
  public status;

  constructor(
    private _userService: UserService,
    private _rolService: RoleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.rol = new Role(0, '', '', '', '');
    this.title = 'Crear Nuevo Rol';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();

  }

  ngOnInit() {
    console.log('token ' + this.token);
  }

  onSubmit() {
    console.log(this.rol);
    this._rolService.create(this.token, this.rol).subscribe(
      response => {
        this.status = response.status;
        if ( response.status !== 'success') {
          this.status = 'Error';
        }else {
          this.rol = new Role(1, '', '', '', '');
        }

      }, error => {
        console.log(<any>error);
      });
  }

}
