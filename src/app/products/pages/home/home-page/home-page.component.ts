import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'products-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor( private serviceProduct: ProductsService ) {

  }

  get productList() {
    return this.serviceProduct._productsApiSearch;
  }

}
