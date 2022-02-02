import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    
    ComponentsModule
  ]
})
export class PagesModule { }
