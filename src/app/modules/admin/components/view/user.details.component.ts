import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, Params, ActivatedRoute} from '@angular/router';
import { UserService} from '../../../../services/user.service';
import { User} from '../../../../Models/user';
import { Role} from '../../Models/Role';
import { RoleService} from '../../service/Role.service';

@Component({
  selector: 'admin-user-view',
  templateUrl: './user.detail.component.html',
  //templateUrl: '../list/rol-list.component.html',
  providers: [UserService, RoleService]
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


      this.user1 = new User(
        0,//this.identity.sub ,
      '',//  this.identity.role,
      '',//  this.identity.name,
       '',// this.identity.surname,
       '',// this.identity.email,
       ''// this.identity.password
        );
      this.getUser();
      this.getRolesxUsuario();
    }
    console.log('user edit component');
    console.log(this.user1);

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

  getRolesxUsuario(){
    // this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._roleService.getRolessxusuario(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.roles = response.data;
            console.log(this.roles);
             this.loadingR = 'hide';
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
