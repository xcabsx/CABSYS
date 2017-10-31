import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


// componentes
import { HomeComponent} from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { UserEditComponent} from './components/user-edit/user-edit.component';
//import { SidebarComponent} from "./sidebar";
import { UserEdit1Component} from './modules/admin/components/edit/user/user.editar.component';
import { AdminModule} from './modules/admin/admin.module';
import {LoginGuard} from './services/login.guard';


const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'index' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'user-edit' , component: UserEditComponent, canActivate: [LoginGuard]},
  {path: '**' , component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


