import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'mostrarEmail',
  templateUrl: '../../views/mostrar.email.html',
  providers: [  ]
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  title = 'Mostrar Email';
  public identity;
  public token;
  public emailContacto;

  constructor(  ) {
  }

  ngOnInit() {
    this.emailContacto = localStorage.getItem('email');
  }
  ngDoCheck() {
    this.emailContacto = localStorage.getItem('email');
  }
  borrarEmail() {
    localStorage.removeItem('email');
    localStorage.clear();
    this.emailContacto = null;
  }
}
