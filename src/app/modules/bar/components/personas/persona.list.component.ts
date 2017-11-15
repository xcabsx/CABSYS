import { Component, Input , OnInit} from '@angular/core';
// import { UserService} from '../../../../services/user.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService} from '../../../../services/user.service';
import { PersonasService} from '../../../../services/personas.service';
import { Persona} from "../../../../Models/persona";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'persona-list',
  templateUrl: '../../view/persona.list.html',
  providers: [UserService, PersonasService]
})
export class PersonaListComponent implements OnInit {
  title = 'Personas';
  public token;
  public identity;
  public personas: Persona[];
  @Input() tipo_persona: String;
  @Input() inom: boolean;
  @Input() iape: boolean;
  @Input() icuit:boolean;
  @Input() idni: boolean;
  @Input() itip: boolean;
  @Input() ifa: boolean;
  @Input() ifn: boolean;

  constructor(
    private _userService: UserService,
    private _personasService: PersonasService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {


  }
  ngOnInit() {
    console.log(this.tipo_persona);
   this.token =  this._userService.getToken2();
    console.log(this.token);
    this.getPersonas(this.tipo_persona);
    }


    getPersonas(tipo) {
    this._personasService.getPersonas(this.token, null  , tipo ).subscribe(
      response => {
        if (response.status === 'success') {
          this.personas = response.data;
        }else {
          console.log(response.status);
        }

      }, error => {
        console.log(<any>error);
      }
    );

    }

  volver() {
    window.history.back();
  }

}
