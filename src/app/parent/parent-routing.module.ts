import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {AuthGuardP} from '../auth/parentauth.guard';

import {UserLoginComponent } from '../user-login/user-login.component'

const parentroutes: Routes =[
  {
    path: 'parent',
    component: ParentComponent,
    canActivate: [AuthGuardP],
    children: [{
      path: '',
      canActivateChild: [AuthGuardP],
      children:[
      {
        path: 'auth/login', component: UserLoginComponent
      }
    ]}
    ]
  }
]
  @NgModule({
  imports: [RouterModule.forChild(parentroutes)],
  exports: [RouterModule]
  })
export class ParentRoutingModule { }