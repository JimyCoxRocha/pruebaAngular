import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'carrito',
        component: CarritoComponent
      },
      {
        path: '**',
        redirectTo: 'carrito'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
