import { Component} from '@angular/core';


@Component({
  selector: 'proveedores-home',
  templateUrl: '../../view/proveedores.home.html'
})
export class ProveedoresHomeComponent  {
  title = 'Proveedores';

  constructor( ) {}
  volver() {
    window.history.back();
  }

}
