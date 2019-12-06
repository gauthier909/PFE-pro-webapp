import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {ChoixEnfantComponent} from "./choix-enfant/choix-enfant.component";
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ErrorRoutingComponent} from './error-routing/error-routing.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'professionel',
    loadChildren: () => import('./professionelle/professionelle.module').then(mod => mod.ProfessionelleModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'choix',
    component: ChoixEnfantComponent
  },
  {
    path: 'hello',
    component: HelloWorldComponent
  },
  {
    path: '**',
    component: ErrorRoutingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
