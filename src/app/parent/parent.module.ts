import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParentRoutingModule} from './parent-routing.module';
import {ParentComponent} from './parent/parent.component';
import {EnfantDetailComponent} from '../enfant-detail/enfant-detail.component';
import {HelloWorldComponent} from '../hello-world/hello-world.component';



@NgModule({
  declarations: [ParentComponent,HelloWorldComponent],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }