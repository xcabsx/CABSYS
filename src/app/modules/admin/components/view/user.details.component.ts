import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, Params, ActivatedRoute} from '@angular/router';
import { UserService} from '../../../../services/user.service';
import { User} from '../../../../Models/user';
import { Role} from '../../Models/Role';
import { RoleService} from '../../service/Role.service';
import { fundido1} from '../../../../animations/animation';
import { Tabs} from '../../../../components/tabs/tabs.component';
import { Tab} from '../../../../components/tabs/tab.component';
import {RolesXUsuariolListComponent} from '../list/roles.x.usuariol.list.component';

@Component({
  selector: 'admin-user-view',
  templateUrl: './user.detail.component.html',
  providers: [UserService, RoleService],
  animations: [fundido1]

  })
export class UserDetailsComponent implements OnInit {
  public title: string;
  public user1: User;
  public  status;
  public identity;
  public token;
  public rol;
  public roles: Role[];
  public loadingU;
  public loadingR;
  public idusuario;


  constructor(
    private _userService: UserService,
    private  _route: ActivatedRoute,
    private  _router: Router,
    private _roleService: RoleService
  ) {
    this.title = 'Detalle';
    //this.rol = new Role(0, '', '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
    this.loadingR = 'show';
    this.loadingU = 'show';

  }

  ngOnInit() {
    if ( this.identity == null) {
      // this._router.navigate(['/login']);
    }else {
      this._route.params.forEach((params: Params) => {
        this.idusuario = +params['id'];
      });
      this.getUser();
     // this.getRolesxUsuario();
    }


  }

  getUser() {
    // this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._userService.getUser(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.user1 = response.data;
             this.loadingU = 'hide';

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

  getRolesxUsuario() {
    // this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._roleService.getRolessxusuario(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.roles = response.data;
             this.loadingR = 'hide';
          }else {
            //aca va error
            this._router.navigate(['/login']);
          }

        }, error => {
          console.log(<any>error);
        }
      );
    });
  }
  quitarRol(rolid, userid) {
    this._roleService.deleteRolesxUsers(this.token, rolid , userid).subscribe(
      response => {
        if (response.status === 'success') {
        //  this.loadingRol = 'hide';
          this.getRolesxUsuario();
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
