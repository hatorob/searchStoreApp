import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productsList: string[] = [];

  constructor() { }

  public addProduct = (product: string): void => {

    if(product) this._productsList.unshift(product);
    //console.log("desde el service -> ", this._productsList);

  }

}
