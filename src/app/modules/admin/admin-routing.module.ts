import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// componentes
import { MainComponent} from './components/main/main.component';

import { AddComponent} from './components/add/add.component';
import { ListComponent} from './components/list/list.component';
import { RolListComponent} from './components/list/rol.list.component';
import { UserListComponent} from './components/list/user.list.component';
import { UserEdit1Component} from './components/edit/user/user.editar.component';
import { UserAddComponent} from './components/add/user.add.component';
import { RolAddComponent} from './components/add/rol.add.component';
import { EditComponent} from './components/edit/edit.component';

const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: MainComponent,
     children: [
       {path: '', redirectTo: 'admin-panel', pathMatch: 'full'},
      {path: 'listado', component: RolListComponent},
       {path: 'edit/:id', component: EditComponent},
      {path: 'listado-usuarios', component: UserListComponent},
      {path: 'crear', component: AddComponent},
      {path: 'crear-usuario', component: UserAddComponent},
      {path: 'crear-rol', component: RolAddComponent},
      {path: 'user-edit/:id', component: UserEdit1Component },
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
