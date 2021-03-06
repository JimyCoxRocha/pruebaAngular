import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navBarItem } from 'src/app/core/interfaces/Header.interfaces';
import { Productos } from 'src/app/core/interfaces/Productos.interfaces';
import { ProductosService } from 'src/app/core/services/productos.service';
import { RoutingSelectedService } from '../../../core/services/routing-selected.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  enlaces : navBarItem[] = [];
  productList: Productos[] = [];

  constructor( 
    private routes: RoutingSelectedService,
    private activatedRoute: ActivatedRoute,
    private productos: ProductosService,
    private route: Router,
  ) { 
    this.enlaces = this.routes.getRoutes(this.activatedRoute.snapshot.url[0]?.path || '');
  }

  ngOnInit(): void {
    this.productos.productos.subscribe(resp => 
      this.productList = resp.productos
    ) 
    
  }

  clickDetalle(e:number){
    console.log("detalle,");
    this.route.navigate(['./detalle', e])

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
