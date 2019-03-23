import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  productDetail: object = {
    name: '', qty: '',  price: ''
  }
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params)=>{
      console.log('this id', params.id);
      let tempObservable = this._httpService.showProduct(params.id);
      tempObservable.subscribe((responseData)=>{
        console.log('got response', responseData);
        this.productDetail = responseData;
      })
    })
  }
  deleteProduct(productDetail){
    let tempObservable = this._httpService.deleteProduct(productDetail);
    tempObservable.subscribe((responseData)=>{
      console.log(responseData);
      this._router.navigate(['products'])
    })
  }

}
