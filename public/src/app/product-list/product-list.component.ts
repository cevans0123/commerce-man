import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log('ngOnInit LIST');
    let tempObservable = this._httpService.getAllProducts();
    tempObservable.subscribe((responseData:any)=>{
      console.log('got a response', responseData);
      this.products = responseData;
    })
  }

}
