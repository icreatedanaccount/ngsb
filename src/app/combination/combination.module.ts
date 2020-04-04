import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinationRoutingModule } from './combination-routing.module';
import { CombinationComponent } from './combination.component';


@NgModule({
  declarations: [CombinationComponent],
  imports: [
    CommonModule,
    CombinationRoutingModule
  ]
})
export class CombinationModule { }
