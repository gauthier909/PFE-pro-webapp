import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfessionelleComponent} from './professionelle/professionelle.component';
import {ProfessionelleDashboardComponent} from './professionelle-dashboard/professionelle-dashboard.component';
import {AuthGuard} from '../auth/auth.guard';

const profesionalroutes: Routes = [
  {
    path: 'professionel',
    component: ProfessionelleComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      canActivateChild: [AuthGuard],
        children:[
          {
            path: '', component: ProfessionelleDashboardComponent
          }
        ]
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profesionalroutes)],
  exports: [RouterModule]
})
export class ProfessionelleRoutingModule { }
