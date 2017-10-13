import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent} from './components/home/home.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AdminModule} from './modules/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuSuperiorComponent,
    LoginComponent,
    UserEditComponent
  ],
  providers: [appRoutingProviders],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    AdminModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
