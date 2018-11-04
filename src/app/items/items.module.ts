import { SharedModuleModule } from './../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemComponent } from './item/item.component';
@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModuleModule
  ],
  declarations: [ItemComponent]
})
export class ItemsModule { }
