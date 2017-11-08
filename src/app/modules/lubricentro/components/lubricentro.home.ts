import { Component} from '@angular/core';


@Component({
  selector: 'lubricentro-home',
  templateUrl: '../view/lubricentro.home.html'
})
export class LubricentroHomeComponent  {
  title = 'Home de Lubricentro';

  constructor( ) {}
  volver() {
    window.history.back();
  }

}
