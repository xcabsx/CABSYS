import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'main-email',
  templateUrl: '../../views/main.email.html',
  providers: [  ]
})
export class MainEmailComponent implements OnInit {
  title = 'Modulo de Emails';
  public identity;
  public token;
  public emailContacto;

  constructor(  ) {
  }

  ngOnInit() {

  }

}
