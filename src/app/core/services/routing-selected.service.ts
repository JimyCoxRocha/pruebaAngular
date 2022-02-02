import { Injectable } from '@angular/core';
import { navBarItem } from '../interfaces/Header.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RoutingSelectedService {

  constructor() { }

  getRoutes( path: string ){
    const routes: navBarItem[] = [
      {
        link: '/',
        texto: 'Home'
      },
      {
        link: '/auth',
        texto: 'Login'
      },
      {
        link: '/compra',
        texto: 'Carrito'
      },
    ]

    if(localStorage.getItem('user'))
      return routes.filter( x => x.texto.toLowerCase() !== 'login');

    return routes.filter( x => x.link.toLowerCase().replace('/', '') !== path);
    
  }
}
