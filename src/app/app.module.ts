import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginGuard} from './services/login.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent} from './components/home/home.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
/* Modulo de Administracion*/
import { AdminModule} from './modules/admin/admin.module';
/*Modulo del Bar */
import { BarModule} from './modules/bar/bar.module';

/*Modulo de Lubricentro*/

import {LubricentroModule} from './modules/lubricentro/lubricentro.module';
import { ProductosComponent} from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuSuperiorComponent,
    LoginComponent,
    UserEditComponent,
    ProductosComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactoComponent,

  ],
  entryComponents: [
    ],
  providers: [appRoutingProviders, LoginGuard],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    AdminModule,
    BarModule,
    LubricentroModule,
    NgbModule.forRoot()
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
