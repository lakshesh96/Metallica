import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTradeComponent } from './edit-trade.component';

describe('EditTradeComponent', () => {
  let component: EditTradeComponent;
  let fixture: ComponentFixture<EditTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
