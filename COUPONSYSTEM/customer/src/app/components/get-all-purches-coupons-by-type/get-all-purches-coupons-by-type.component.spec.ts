import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPurchesCouponsByTypeComponent } from './get-all-purches-coupons-by-type.component';

describe('GetAllPurchesCouponsByTypeComponent', () => {
  let component: GetAllPurchesCouponsByTypeComponent;
  let fixture: ComponentFixture<GetAllPurchesCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllPurchesCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPurchesCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
