import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// componentes
import { MainComponent} from './components/main/main.component';
import { AdminGuard} from './service/admin.guard';

import { ListComponent} from './components/list/list.component';
import { RolListComponent} from './components/list/rol.list.component';
import { UserListComponent} from './components/list/user.list.component';
import { UserEdit1Component} from './components/edit/user/user.editar.component';
import { UserAddComponent} from './components/add/user.add.component';
import { RolAddComponent} from './components/add/rol.add.component';
import { EditComponent} from './components/edit/edit.component';
import { PermisosListComponent} from './components/list/permisos.list.component';
import { UserDetailsComponent} from './components/view/user.details.component';
import { SidebarComponent} from "./components/main/sidebar";
import { RolXUserComponent} from "./components/add/Rol.x.User.component";
import { UsuariosXRolListComponent} from "./components/list/usuarios.x.rol.list.component";
import {AplicacionListComponent} from "./components/list/aplicacion.list.component";
import {RolesXAplicacionListComponent} from "./components/list/roles.x.aplicacion.list.component";
import {RolXAplicacionComponent} from "./components/add/Rol.x.Aplicacion.component";

const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: SidebarComponent,
    canActivate: [AdminGuard],
     children: [
       {path: '', redirectTo: 'admin-panel', pathMatch: 'full'},
      {path: 'listado', component: RolListComponent},
      {path: 'apl-listado', component: AplicacionListComponent},
       {path: 'edit/:id', component: EditComponent},
      {path: 'listado-usuarios', component: UserListComponent},
      {path: 'crear-usuario', component: UserAddComponent},
      {path: 'crear-rol', component: RolAddComponent},
      {path: 'user-edit/:id', component: UserEdit1Component },
      {path: 'permiso-list/:id', component: PermisosListComponent },
      {path: 'uxr-list/:id', component: UsuariosXRolListComponent },
      {path: 'rxa-list/:id', component: RolesXAplicacionListComponent },
      {path: 'user-detail/:id', component: UserDetailsComponent },
      {path: 'rol-asign/:id', component: RolXUserComponent },
      {path: 'AxR-asign/:id', component: RolXAplicacionComponent },
      {path: '**', component: RolListComponent },


     ]
  }

  ];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
