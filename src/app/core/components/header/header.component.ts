import { Component, Input, OnInit } from '@angular/core';
import { navBarItem } from '../../interfaces/Header.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navegacion: navBarItem[] = [];

  @Input('enlaces') set  enlaces( newLinks: navBarItem[] ){
    this.navegacion = [ ...this.navegacion, ...newLinks ]
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
