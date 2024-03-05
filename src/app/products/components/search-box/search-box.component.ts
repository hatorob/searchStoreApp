import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product-search-box',
  template: `
    <h2>Buscar:</h2>
    <input
      type="text"
      placeholder="Buscar producto"
      class="form-control mt-2"
      (keyup.enter)="searchProduct()"
      #txtProduct
    >
  `,
})
export class SearchBoxComponent {

  //!Uso viewChild
  @ViewChild('txtProduct')
  public product!: ElementRef<HTMLInputElement>;

  //! Debemos traernos nuestro servicio para actualizar el valor
  constructor( private serviceProduct: ProductsService ) {

  }

  public searchProduct = (): void => {
    let product: string = this.product.nativeElement.value;
    this.serviceProduct.addProduct(product);
    //!Limipamos el valor del input
    this.product.nativeElement.value = "";
    //console.log("Obtengo el valor deseado", this.product.nativeElement.value);
  }

}
