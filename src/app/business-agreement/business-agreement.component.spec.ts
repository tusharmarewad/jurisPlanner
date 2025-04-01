import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAgreementComponent } from './business-agreement.component';

describe('BusinessAgreementComponent', () => {
  let component: BusinessAgreementComponent;
  let fixture: ComponentFixture<BusinessAgreementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessAgreementComponent]
    });
    fixture = TestBed.createComponent(BusinessAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
