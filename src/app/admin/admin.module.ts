import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {ResponsableRegisterComponent} from './responsable-register/responsable-register.component';


@NgModule({
  declarations: [AdminComponent,ResponsableRegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
