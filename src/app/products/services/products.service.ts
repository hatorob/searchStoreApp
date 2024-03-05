import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductSearch } from '../interfaces/products.interface';

const URL: string = "https://api.escuelajs.co/api/v1/products/";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productsList: string[] = [];
  public _productsApiSearch: ProductSearch[] = [];

  constructor( private http: HttpClient ) {
    this.loadLocalStorageProduct();
   }

  get productList() {
    return [...this._productsList];
  }

  public addProduct = (product: string): void => {

    if(product.length == 0) return;
    this.historyProduct(product);
    this.addLocalStorageProduct();

    const params = new HttpParams()
                        .set('title',product)
                        .set('offset','0')
                        .set('limit','10');

    //! Ahora consumamos la api para obtener data
    this.http.get<ProductSearch[]>(`${URL}`,{ params })
              .subscribe( (resp) => {
                 this._productsApiSearch = resp
                 console.log("resp",resp);
              });

  }

  private historyProduct = (product: string) => {

    product = product.toLowerCase();
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
    if(this._productsList.length > 0) this.addProduct(this._productsList[0]);

  }



}
