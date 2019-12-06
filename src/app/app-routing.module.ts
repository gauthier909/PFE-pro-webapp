import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {ChoixEnfantComponent} from "./choix-enfant/choix-enfant.component";
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ErrorRoutingComponent} from './error-routing/error-routing.component';
import {EnfantsComponent} from './enfants/enfants.component';
import {EnfantDetailComponent} from './enfant-detail/enfant-detail.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserLoginComponent
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
    path: 'enfants',
    component: EnfantsComponent
  },
  {
    path: 'detail/:id',
    component: EnfantDetailComponent
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
