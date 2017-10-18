import { Component, OnInit } from '@angular/core';
import { User} from '../../Models/user';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  providers: [UserService]
})
export class UserEditComponent implements OnInit {
  public title;
  public user: User;
  public identity;
  public token;
  public editar;
  public status;

  constructor(
    private _userService: UserService
  ) {
    this.title = 'Mis Datos';
    this.editar = false;
    this.token = this._userService.getToken2();
    this.identity = this._userService.getIdentity();
    this.user = new User(0, '', '', '', '', '');
  }

  ngOnInit() {
    this.user.name = this.identity.name;
    this.user.surname = this.identity.surname;
    this.user.email = this.identity.email;
    this.user.role = this.identity.role;
    console.log(this.identity.role);

  }
  onSubmit() {

    this._userService.update_user(this.user).subscribe(
      response => {
        this.status = response.status;
        if (this.status === 'success') {
          localStorage.setItem('identity', JSON.stringify(response.user));
          this.editar = false;
        }
        console.log(response.status);
        },
      error => {
        console.log(<any>error);
      }
    );
  }
  onEditar(editform) {
    this.user.name = this.identity.name;
    this.user.surname = this.identity.surname;
    this.user.email = this.identity.email;
    this.user.role = this.identity.role;
    if (this.editar) {
      this.editar = false;
      this.user.password = '';
    }else {
      this.editar = true;
    }


  }

}
