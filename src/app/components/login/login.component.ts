import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: string;
  public user;
  public identity;
  public token;
  public loading;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _userService: UserService) {
    this.title = 'Identificate';
    this.loading = 'hide';
    this.user = {
      'email': '',
      'password': '',
      'getHash': true
    };
  }

  ngOnInit() {
  }

  logOut() {
    this._route.params.forEach((params: Params) => {// recorre los parametros
      let logout = +params['id'];
      if (logout == 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;
        window.location.href = '/login';
      }
    });
  }

  onSubmit() {
    this.loading = 'show';
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response;
        if (this.identity.length <= 1) {
          console.log('error en el servidor');
          this.loading = 'hide';
        } else {
          if (!this.identity.status) {// no existe la variable status si es correcto
            localStorage.setItem('identity', JSON.stringify(this.identity));
            // para token la misma llamada pero poniendo el resultado en token
            this.user.getHash = ''; // al mandar falso devuelve el token la funcion
            this._userService.signup(this.user).subscribe(
              response1 => {
                this.token = response1;
                if (this.token.length <= 1) {
                  console.log('error en el servidor');
                  this.loading = 'hide';
                } else {
                  if (!this.token.status) {// no existe la variable status si es correcto
                    localStorage.setItem('token', JSON.stringify(this.token));
                    this.loading = 'hide';
                    this._router.navigate(['/home']);
                  }
                }
              }, error => {
                console.log(<any>error);
              }
            );


          }

        }

      }, error => {
        console.log(<any>error);

      }
    );
  }


}
