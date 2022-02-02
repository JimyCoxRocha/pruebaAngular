import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeCard } from '../../AppConstants/CardConstants';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  typeCard = TypeCard;

  @Input() tipoCard: string = this.typeCard.list;

  @Input() idProducto: number = 0;
  @Input() titulo: string = '';
  @Input() image: string = '';
  @Input() desc: string = '';
  @Input() cantDisp: number = 0;
  @Input() isInCart: boolean = false;
  @Input() precio: string = '';
  
  @Output() clickDetalle = new EventEmitter();
  @Output() clickAddCar = new EventEmitter();
  @Output() clickRemoveCar = new EventEmitter();


  constructor( ) { }

  ngOnInit(): void {
  }

  getDetalle(){
    console.log("Get detalle");
    this.clickDetalle.emit( this.idProducto.toString() );
  }
  
  addCar(){
    console.log("Get addCar");
    this.clickAddCar.emit( this.idProducto.toString() );
  }

  removeCar(){
    console.log("Get removeCar");
    this.clickRemoveCar.emit( this.idProducto.toString() );
  }

}
