import { Component } from '@angular/core';

@Component({
  selector: 'product-search-box',
  template: `
    <h2>Buscar:</h2>
    <input
      type="text"
      placeholder="Buscar producto"
      class="form-control mt-2"
    >
  `,
})
export class SearchBoxComponent {

}
