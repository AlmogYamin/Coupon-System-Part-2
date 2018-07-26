import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import {HttpModule} from '@angular/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { RemoveCouponComponent } from './components/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { GetCouponComponent } from './components/get-coupon/get-coupon.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { GetAllCompanyCouponsComponent } from './components/get-all-company-coupons/get-all-company-coupons.component';
import { GetCouponsByTypeComponent } from './components/get-coupons-by-type/get-coupons-by-type.component';
import { GetCompanyCouponsByTheirTypeComponent } from './components/get-company-coupons-by-their-type/get-company-coupons-by-their-type.component';
import { GetCouponLasserThenGivenPriceComponent } from './components/get-coupon-lasser-then-given-price/get-coupon-lasser-then-given-price.component';
import { GetAllCouponsUpUntillGiveDateComponent } from './components/get-all-coupons-up-untill-give-date/get-all-coupons-up-untill-give-date.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,
    RemoveCouponComponent,
    UpdateCouponComponent,
    GetCouponComponent,
    GetAllCouponsComponent,
    GetAllCompanyCouponsComponent,
    GetCouponsByTypeComponent,
    GetCompanyCouponsByTheirTypeComponent,
    GetCouponLasserThenGivenPriceComponent,
    GetAllCouponsUpUntillGiveDateComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'createCoupon',
        component:CreateCouponComponent
      },
      {
        path: 'removeCoupon',
        component:RemoveCouponComponent
      },
      {
        path: 'updateCoupon',
        component:UpdateCouponComponent 
      },
      {
        path: 'getCoupon',
        component:GetCouponComponent 
      },
      {
        path: 'getAllCoupons',
        component:GetAllCouponsComponent 
      },
      {
        path: 'getAllCompanyCoupons',
        component:GetAllCompanyCouponsComponent 
      },
      {
        path: 'getCouponsByType',
        component:GetCouponsByTypeComponent 
      },
      {
        path: 'getCompanyCouponsByTheirType',
        component:GetCompanyCouponsByTheirTypeComponent 
      },
      {
        path: 'getCouponLasserThenGivenPrice',
        component:GetCouponLasserThenGivenPriceComponent 
      },
      {
        path: 'getCouponUpToGivenEndDate',
        component:GetAllCouponsUpUntillGiveDateComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
