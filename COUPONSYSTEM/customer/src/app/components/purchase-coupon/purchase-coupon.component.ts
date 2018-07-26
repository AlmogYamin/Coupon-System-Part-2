import { Component, OnInit } from '@angular/core';

import {Http} from '@angular/http';
import { GetAllPurchesCouponsByTypeComponent } from '../get-all-purches-coupons-by-type/get-all-purches-coupons-by-type.component';
import { puts } from 'util';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public idtoget : Number;

  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public purchaseCoupon()
  {
    this._http.put('http://localhost:8080/customerApi/purchaseCoupon/', this.idtoget) 
    .subscribe(function(response)
    {
      console.log(response);

    });
}
}
