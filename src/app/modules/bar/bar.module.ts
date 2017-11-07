// modulos
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { BarRoutingModule} from './bar-routing.module';

// import { MainComponent} from './components/main/main.component';

// import { AddComponent} from './components/add/add.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BarsidebarComponent} from './components/main/barsidebar';
import {BarHomeComponent} from './components/bar.home';
import {BarGuard} from "./service/bar.guard";


@NgModule({
  declarations: [
   BarsidebarComponent,
   BarHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BarRoutingModule,
    NgbModule
  ],
  providers: [BarGuard]
})

export class BarModule {}
