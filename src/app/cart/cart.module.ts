import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModuleModule } from './../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModuleModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
