import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'guardarEmail',
  templateUrl: '../../views/guardar.email.html',
   providers: [  ]
})
export class GuardarEmailComponent implements OnInit {
  title = 'Guardar Email';
  public identity;
  public token;
  public emailContacto;

  constructor(  ) {
   }

  ngOnInit() {
    //this.emailContacto = localStorage.getItem('email');
  }
  guardarEmail() {
    localStorage.setItem('email', this.emailContacto);
    console.log(localStorage.getItem('email'));
  }
}
