import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginGuard} from "./services/login.guard";


import { AppComponent } from './app.component';
import { HomeComponent} from './components/home/home.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AdminModule} from './modules/admin/admin.module';
import { BarModule} from './modules/bar/bar.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



//import { SidebarComponent} from "./sidebar";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuSuperiorComponent,
    LoginComponent,
    UserEditComponent


    //SidebarComponent
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
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
