import { Component, OnInit, Inject } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { fundido} from '../../animations/animation';

import {UserDetailsComponent} from "../../modules/admin/components/view/user.details.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fundido]
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }


}



