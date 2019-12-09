import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParentRoutingModule} from './parent-routing.module';
import {ParentComponent} from './parent/parent.component';
import {EnfantDetailComponent} from '../enfant-detail/enfant-detail.component';



@NgModule({
  declarations: [ParentComponent,EnfantDetailComponent],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
