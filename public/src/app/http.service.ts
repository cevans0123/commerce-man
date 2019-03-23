import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  addProduct(product){
    console.log('here I am', product)
    return this._http.post('api/products/new', product);
  }
  getAllProducts(){
    return this._http.get('api/products');
  }
  showProduct(id){
    return this._http.get('api/products/'+id);
  }
  updateProduct(product){
    return this._http.put(`api/products/${product._id}/edit`, product);
  }
  deleteProduct(id){
    return this._http.delete('api/products/'+id);
  }
}
