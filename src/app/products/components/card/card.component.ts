import { Component, Input } from '@angular/core';
import { ProductSearch } from '../../interfaces/products.interface';

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input()
  public product!: ProductSearch;

}
