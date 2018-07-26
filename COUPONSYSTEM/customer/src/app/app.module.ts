import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PurchaseCouponComponent } from './components/purchase-coupon/purchase-coupon.component';
import { GetAllPurchesedCouponsComponent } from './components/get-all-purchesed-coupons/get-all-purchesed-coupons.component';
import { GetAllPurchesCouponsByTypeComponent } from './components/get-all-purches-coupons-by-type/get-all-purches-coupons-by-type.component';
import { GetCouponsByPriceComponent } from './components/get-coupons-by-price/get-coupons-by-price.component';
import { GetAllPurchesCouponsByDateComponent } from './components/get-all-purches-coupons-by-date/get-all-purches-coupons-by-date.component';


@NgModule({
  declarations: [
    AppComponent,
    PurchaseCouponComponent,
    GetAllPurchesedCouponsComponent,
    GetAllPurchesCouponsByTypeComponent,
    GetCouponsByPriceComponent,
    GetAllPurchesCouponsByDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'purchaseCoupon',
        component:PurchaseCouponComponent
      },
      {
        path:'getAllPurchasedCoupon',
        component:GetAllPurchesedCouponsComponent
      },
      {
        path:'getAllCouponsByType',
        component:GetAllPurchesCouponsByTypeComponent
      },   
      {
        path:'getAllCouponsByPrice',
        component:GetCouponsByPriceComponent
      },  
      {
        path:'getAllCouponsByDate',
        component:GetAllPurchesCouponsByDateComponent
      }    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
