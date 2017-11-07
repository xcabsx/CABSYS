import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
// componentes

import { AdminGuard} from './service/admin.guard';
import {BarsidebarComponent} from './components/main/barsidebar';
import {BarHomeComponent} from './components/bar.home';
import {BarGuard} from './service/bar.guard';


const BarRoutes: Routes = [
  {
    path: 'bar-panel',
    component: BarsidebarComponent,
    canActivate: [BarGuard],
    children: [
      {path: '', redirectTo: 'bar-home', pathMatch: 'full'},
      {path: 'bar-home', component: BarHomeComponent},
      {path: '**', component: BarHomeComponent },
     ]
  }

  ];
@NgModule({
  imports: [
    RouterModule.forChild(BarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BarRoutingModule {}
