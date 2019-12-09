import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterProfessionnelComponent } from './register-professionnel/register-professionnel.component';
import {ResponsableRoutingModule} from './responsable-routing.module';
import {ResponsableComponent} from './responsable/responsable.component';


@NgModule({
  declarations: [ResponsableComponent,RegisterProfessionnelComponent],
  imports: [
    CommonModule,
    ResponsableRoutingModule
  ]
})
export class ResponsableModule { }
