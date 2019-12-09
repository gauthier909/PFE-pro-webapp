import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardR} from '../auth/responssible.guard';
import {ParentComponent} from '../parent/parent/parent.component';
import {RegisterProfessionnelComponent} from './register-professionnel/register-professionnel.component';
import {ResponsableComponent} from './responsable/responsable.component';

const responsibleroutes: Routes = [
  {
    path: 'responsable',
    component: ResponsableComponent,
    canActivate: [AuthGuardR],
    children: [{
      path: '',
      canActivateChild: [AuthGuardR],
      children: [{
        path: '',
        component: RegisterProfessionnelComponent
      }]
    }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(responsibleroutes)],
  exports: [RouterModule]
})
export class ResponsableRoutingModule { }
