import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productEdit: object = {
    name: '', qty: '', price: ''
  }
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log('moving thru edits');
      let tempObservable = this._httpService.showProduct(params.id);
      tempObservable.subscribe((responseData:any)=>{
        console.log('got response', responseData);
        this.productEdit = responseData;
      })
    })
  }
  onEdit(){
    console.log('update?', this.productEdit);
    let tempObservable = this._httpService.updateProduct(this.productEdit);
    tempObservable.subscribe((responseData:any)=>{
      console.log('edits, baby', responseData);
      if (responseData.error){

      }else{
        this._router.navigate(['products'])
      }
      
    })
  }
}
