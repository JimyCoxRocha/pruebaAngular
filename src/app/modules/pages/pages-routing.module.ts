import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'detalle/:id',
        component: DetalleComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
