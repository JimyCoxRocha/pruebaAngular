import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navBarItem } from 'src/app/core/interfaces/Header.interfaces';
import { Productos } from 'src/app/core/interfaces/Productos.interfaces';
import { RoutingSelectedService } from 'src/app/core/services/routing-selected.service';
import { ProductosService } from '../../../core/services/productos.service';
import { UserLoginService } from '../../auth/services/user-login.service';

interface TotalByProduct {
  total: number;
  detalle: {
    id: number,
    price: number
  }[]
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  enlaces : navBarItem[] = [];
  productList: Productos[] = [];
  total: TotalByProduct = { total: 0, detalle: [] } as TotalByProduct;
  errorLogin: boolean = false;
  compraRealizada: boolean = false;

  constructor( 
    private routes: RoutingSelectedService,
    private activatedRoute: ActivatedRoute,
    private productos: ProductosService,
    private auth: UserLoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.enlaces = this.routes.getRoutes(this.activatedRoute.snapshot.url[0]?.path || '');
  }

  ngOnInit(): void {
    this.productos.onlyProductInCart.subscribe(resp => {
      this.productList = resp.productos.map( x => {
        this.total.total += JSON.parse(x.precio);
        this.total.detalle.push({
          id: x.id_producto,
          price: JSON.parse(x.precio)
        })
        return x;
      })
    }) 
  }

  clickDetalle(e:number){
    this.router.navigate(['./detalle', e])

  }
  clickAddCar(e:number){
    this.productos.setProductStorage(e, this.productList);
  }
  clickRemoveCar(id:number){
    this.productos.rmProductStorage(id, this.productList);
    this.calculateSub(id);
    this.productos.onlyProductInCart.subscribe(resp =>{
      this.productList = resp.productos
    }) 
    
  }

  calculateSub( id: number ){
    this.total.detalle.map( e => {
      if(e.id == id)
      this.total.total -= e.price
    } )
    
  }

  comprar(){
    if(this.auth.userIsLogged()){
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 5000);
      this.compraRealizada =  true;
      this.errorLogin =  false;
      this.productList= [];
      this.productos.rmAllProductStorage();
    }else{
      setTimeout(() => {
        this.router.navigate(['/auth'])
      }, 5000);
      this.errorLogin =  true;
      this.compraRealizada =  false;
    }
  }
}
