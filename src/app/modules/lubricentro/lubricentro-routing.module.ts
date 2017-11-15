import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
// componentes

import { AdminGuard} from './service/admin.guard';



import { LubricentroSidebarComponent} from './components/main/lubricentro.sidebar';
import { LubricentroGuard} from './service/lubricentro.guard';
import { LubricentroHomeComponent} from './components/lubricentro.home';
import {ProveedoresHomeComponent} from './components/proveedores/proveedores.home.component';


const LubricentroRoutes: Routes = [
  {
    path: 'lubri-panel',
    component: LubricentroSidebarComponent,
    canActivate: [LubricentroGuard],
    children: [
      {path: '', redirectTo: 'lubri-home', pathMatch: 'full'},
      {path: 'lubri-home', component: LubricentroHomeComponent},
      {path: 'prove-home', component: ProveedoresHomeComponent},
      {path: '**', component: LubricentroHomeComponent },
     ]
  }

  ];
@NgModule({
  imports: [
    RouterModule.forChild(LubricentroRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LubricentroRoutingModule {}
