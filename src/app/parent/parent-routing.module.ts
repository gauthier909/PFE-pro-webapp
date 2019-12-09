import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {AuthGuardP} from '../auth/parentauth.guard';
import {EnfantDetailComponent} from '../enfant-detail/enfant-detail.component';

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
        path: '', component: EnfantDetailComponent
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
