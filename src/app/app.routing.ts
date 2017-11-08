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
import {ProductosComponent} from './components/productos/productos.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {ContactoComponent} from './components/contacto/contacto.component';


const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'index' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'productos' , component: ProductosComponent},
  {path: 'servicios' , component: ServiciosComponent},
  {path: 'nosotros' , component: NosotrosComponent},
  {path: 'contacto' , component: ContactoComponent},
  {path: 'user-edit' , component: UserEditComponent, canActivate: [LoginGuard]},
  {path: '**' , component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


