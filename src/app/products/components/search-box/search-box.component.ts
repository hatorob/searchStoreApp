import { Component, ElementRef, ViewChild } from '@angular/core';

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
  constructor() {

  }

  public searchProduct = (): void => {
    console.log("Obtengo el valor deseado", this.product.nativeElement.value);
  }

}
