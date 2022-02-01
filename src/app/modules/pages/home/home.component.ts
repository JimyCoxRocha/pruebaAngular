import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { navBarItem } from 'src/app/core/interfaces/Header.interfaces';
import { RoutingSelectedService } from '../../../core/services/routing-selected.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enlaces : navBarItem[] = [];

  constructor( 
    private routes: RoutingSelectedService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.enlaces = this.routes.getRoutes(this.activatedRoute.snapshot.url[0]?.path || '');
  }

  ngOnInit(): void {
    
    console.log(this.enlaces); 
  }

}
