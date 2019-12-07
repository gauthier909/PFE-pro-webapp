import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionelleRoutingModule } from './professionelle-routing.module';
import { ProfessionelleDashboardComponent } from './professionelle-dashboard/professionelle-dashboard.component';
import { ProfessionelleComponent } from './professionelle/professionelle.component';


@NgModule({
  declarations: [ProfessionelleDashboardComponent, ProfessionelleComponent],
  imports: [
    CommonModule,
    ProfessionelleRoutingModule
  ]
})
export class ProfessionelleModule { }
