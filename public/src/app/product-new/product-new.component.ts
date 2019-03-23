import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: object = {
    name: '', qty: '', price: ''
  };
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {

  }
  onSubmit(){
    console.log('onSubmit', this.newProduct);
    let tempObservable = this._httpService.addProduct(this.newProduct);
    tempObservable.subscribe((data)=>{
      console.log('got some data', data);
      this._router.navigate(['products'])
    })
  }
}
