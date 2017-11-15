// modulos
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { LubricentroRoutingModule} from './lubricentro-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LubricentroGuard} from './service/lubricentro.guard';
import {LubricentroSidebarComponent} from './components/main/lubricentro.sidebar';
import {LubricentroHomeComponent} from './components/lubricentro.home';
import { PersonaListComponent} from './components/personas/persona.list.component';
import {BarModule} from '../bar/bar.module';
import { LubGenerateDatePipe} from "./pipes/lub.generate.date.pipe";
import { ProveedoresHomeComponent} from './components/proveedores/proveedores.home.component';


@NgModule({
  declarations: [
   LubricentroSidebarComponent,
   LubricentroHomeComponent,
    PersonaListComponent,
    LubGenerateDatePipe,
    ProveedoresHomeComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    LubricentroRoutingModule,
    NgbModule

  ],
  providers: [LubricentroGuard]
})

export class LubricentroModule {}
