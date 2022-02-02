import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CarritoComponent } from './carrito/carrito.component';
import { ComponentsModule } from '../../core/components/components.module';


@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    ComponentsModule
  ]
})
export class CompraModule { }
