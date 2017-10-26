import { Component} from '@angular/core';


@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent  {
  title = 'Panel de Administracion';

  constructor( ) {}
  volver() {
    window.history.back();
  }

}
