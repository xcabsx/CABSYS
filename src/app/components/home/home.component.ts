import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { fundido} from '../../animations/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fundido]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
