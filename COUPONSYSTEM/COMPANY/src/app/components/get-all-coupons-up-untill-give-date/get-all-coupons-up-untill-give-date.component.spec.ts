import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCouponsUpUntillGiveDateComponent } from './get-all-coupons-up-untill-give-date.component';

describe('GetAllCouponsUpUntillGiveDateComponent', () => {
  let component: GetAllCouponsUpUntillGiveDateComponent;
  let fixture: ComponentFixture<GetAllCouponsUpUntillGiveDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCouponsUpUntillGiveDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCouponsUpUntillGiveDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
