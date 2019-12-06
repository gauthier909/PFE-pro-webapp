import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {UserLoginComponent} from '../user-login/user-login.component';

const authroutes: Routes = [
  {
    path: 'auth',
    children:[{
      path: 'login',
      component: UserLoginComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authroutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
