import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productsList: string[] = [];

  constructor() {
    this.loadLocalStorageProduct();
   }

  get productList() {
    return [...this._productsList];
  }

  public addProduct = (product: string): void => {

    if(product.length == 0) return;
    this.historyProduct(product);
    this.addLocalStorageProduct();
    //console.log("desde el service -> ", this._productsList);

  }

  private historyProduct = (product: string) => {

    if(this._productsList.includes(product)) this._productsList = this._productsList.filter( el => el != product);
    this._productsList.unshift(product);
    //! Limito el producto a un máximo de 10 para el historial
    this._productsList = this._productsList.splice(0,10);

  }

  /**
   * Funcionalidad addLocalStorageProduct que nos permite guardar en el LocalStorage
   */
  private addLocalStorageProduct = () => {
    localStorage.setItem(
        "historyProducts",
        JSON.stringify(this._productsList)
    );
  }

  /**
   * Funcionalidad loadLocalStorageProduct que nos permite obtener el valor del localStorage
   */
  private loadLocalStorageProduct = () => {
    let productListHistory = localStorage.getItem("historyProducts");
    if(productListHistory) this._productsList = JSON.parse(productListHistory);
  }



}
