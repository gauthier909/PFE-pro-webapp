import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ResponsableRegisterComponent} from './responsable-register/responsable-register.component';
import {AuthGuardA} from '../auth/adminauth.guard';
import {AuthGuard} from '../auth/auth.guard';

const adminroutes: Routes = [
  { path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardA],
    children: [{
      path: '',
      canActivateChild: [AuthGuardA],
      children: [{
        path: '' ,
        component: ResponsableRegisterComponent
      }]
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(adminroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
