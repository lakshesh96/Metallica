import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTradeComponent } from './add-trade.component';

describe('AddTradeComponent', () => {
  let component: AddTradeComponent;
  let fixture: ComponentFixture<AddTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
