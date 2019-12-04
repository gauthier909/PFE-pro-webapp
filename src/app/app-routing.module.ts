import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {ChoixEnfantComponent} from "./choix-enfant/choix-enfant.component";


const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent
  },
  {
    path:'choix',
    component: ChoixEnfantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
