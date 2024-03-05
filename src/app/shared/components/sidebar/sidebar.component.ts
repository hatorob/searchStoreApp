import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  //public productsList!: string[];

  constructor( private serviceProduct: ProductsService ) {

  }

  //! Obtengo la lista de productos
  get productList() {
    return [...this.serviceProduct.productList];
  }



}
