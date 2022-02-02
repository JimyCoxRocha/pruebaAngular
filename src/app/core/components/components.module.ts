import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [ HeaderComponent, SideBarComponent, CardComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
