import { Component} from '@angular/core';


@Component({
  selector: 'bar-home',
  templateUrl: '../view/bar.home.html'
})
export class BarHomeComponent  {
  title = 'Home de BAR';

  constructor( ) {}
  volver() {
    window.history.back();
  }

}
