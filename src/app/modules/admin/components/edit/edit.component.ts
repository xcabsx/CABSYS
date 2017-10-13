import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, Params, ActivatedRoute} from '@angular/router';
import { UserService} from '../../../../services/user.service';
import { User} from '../../../../Models/user';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './edit.component.html',
  providers: [UserService]
})
export class EditComponent implements OnInit {
  public title: string;
  public user: User;
  public  status;
  public identity;
  public token;


  constructor(
    private _userService: UserService,
    private  _route: ActivatedRoute,
    private  _router: Router
  ) {
    this.title = 'Editar Datos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();

  }

  ngOnInit() {
    if ( this.identity == null) {
      // this._router.navigate(['/login']);
    }else {
      this.getUser();
      console.log(this.identity.role);
      this.user = new User(
        this.identity.sub ,
        this.identity.role,
        this.identity.name,
        this.identity.surname,
        this.identity.email,
        this.identity.password
        );
    }
    console.log('user edit component');

  }
  onSubmit() {
    this._userService.update_user(this.user).subscribe(
      response => {
        this.status = response.status;

        if (this.status != 'success') {
          this.status = 'error';
        }else {
          console.log('va a localstorrage');
          localStorage.setItem('identity', JSON.stringify(this.user));
          // como ya esta actualizado en la bd .. reemplaza el usuario del local storage

        }

      }, error => {
        console.log(<any>error);
      } );
    console.log(this.user);
  }
  getUser() {
    // this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._userService.getUser(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            // podemos ver la tarea
            this.user = response.data;
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

}
