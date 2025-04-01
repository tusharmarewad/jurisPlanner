import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalProcessOutsourcingComponent } from './legal-process-outsourcing.component';

describe('LegalProcessOutsourcingComponent', () => {
  let component: LegalProcessOutsourcingComponent;
  let fixture: ComponentFixture<LegalProcessOutsourcingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalProcessOutsourcingComponent]
    });
    fixture = TestBed.createComponent(LegalProcessOutsourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
