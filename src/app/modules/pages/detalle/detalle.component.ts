import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { navBarItem } from 'src/app/core/interfaces/Header.interfaces';
import { Productos } from 'src/app/core/interfaces/Productos.interfaces';
import { RoutingSelectedService } from 'src/app/core/services/routing-selected.service';
import { ProductosService } from '../../../core/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  enlaces : navBarItem[] = [];
  productList: Productos[] = [];

  constructor( 
    private routes: RoutingSelectedService,
    private activatedRoute: ActivatedRoute,
    private productos: ProductosService,
    private route: ActivatedRoute
  ) { 
    this.enlaces = this.routes.getRoutes(this.activatedRoute.snapshot.url[0]?.path || '');
  }

  ngOnInit(): void {
    let producto = '';
    this.route.params.subscribe((params: any) => producto = params['id']);

    this.productos.productos.subscribe(resp => {
      this.productList = resp.productos.filter( m => m.id_producto === JSON.parse(producto))
    }) 
  }

  clickDetalle(e:any){
    console.log("detalle,");
  }
  clickAddCar(e:number){
    console.log(" add Productos");
    this.productos.setProductStorage(e, this.productList);
  }
  clickRemoveCar(e:any){
    console.log("RM Productos");
    this.productos.rmProductStorage(e, this.productList);
  }

}
