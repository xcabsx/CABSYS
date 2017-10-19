// modulos
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AdminRoutingModule} from './admin-routing.module';

import { MainComponent} from './components/main/main.component';
import { EditComponent} from './components/edit/edit.component';
//import { AddComponent} from './components/add/add.component';
import { ListComponent} from './components/list/list.component';
import { RolListComponent} from './components/list/rol.list.component';
import { UserListComponent} from './components/list/user.list.component';
import { UserEdit1Component} from './components/edit/user/user.editar.component';
import { UserAddComponent} from './components/add/user.add.component';
import { RolAddComponent} from './components/add/rol.add.component';
import { PermisosListComponent} from './components/list/permisos.list.component';
import { UserDetailsComponent} from './components/view/user.details.component';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
  //  AddComponent,
    EditComponent,
    RolListComponent,
    UserListComponent,
    UserEdit1Component,
    UserAddComponent,
    RolAddComponent,
    PermisosListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  providers: []
})

export class AdminModule {}