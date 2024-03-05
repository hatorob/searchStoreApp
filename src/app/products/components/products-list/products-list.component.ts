import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductSearch } from '../../interfaces/products.interface';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {


  @Input()
  public productsList!: ProductSearch[];


}
