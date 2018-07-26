import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPurchesCouponsByDateComponent } from './get-all-purches-coupons-by-date.component';

describe('GetAllPurchesCouponsByDateComponent', () => {
  let component: GetAllPurchesCouponsByDateComponent;
  let fixture: ComponentFixture<GetAllPurchesCouponsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllPurchesCouponsByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPurchesCouponsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
