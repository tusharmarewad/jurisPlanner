import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkComponent } from './trademark.component';

describe('TrademarkComponent', () => {
  let component: TrademarkComponent;
  let fixture: ComponentFixture<TrademarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrademarkComponent]
    });
    fixture = TestBed.createComponent(TrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
