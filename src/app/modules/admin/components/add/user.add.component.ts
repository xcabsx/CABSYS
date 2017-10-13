import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User} from '../../../../models/user';
import { UserService} from '../../../../services/user.service';


@Component({
  selector: 'admin-add-user',
  templateUrl: './user.add.html',
  providers: [UserService]
})

export class UserAddComponent implements OnInit {
  public title: string;
  public user: User;
  public status;

  constructor(
    private  _userService: UserService,
   private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Alta de Usuarios';
    this.user = new User(1, 'user', '', '', '', '');
    /*this.user = {
      id: null ,
      name: '',
      email: '',
      role: '',
      surname: '',
      password: ''
    };*/


  };

  public ngOnInit() {
    console.log('el componente ha sido cargado correctamente');

  }
  onSubmit() {
    console.log(this.user);
    this._userService.register2(this.user).subscribe(
      response => {
        this.status = response.status;
        if ( response.status !== 'success') {
          this.status = 'Error';
        }else {
          this.user = new User(1, 'user', '', '', '', '');
        }

      },error => {
          console.log(<any>error);
      });
  }

}
