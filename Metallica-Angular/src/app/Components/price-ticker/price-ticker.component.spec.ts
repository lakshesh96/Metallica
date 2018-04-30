import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTickerComponent } from './price-ticker.component';

describe('PriceTickerComponent', () => {
  let component: PriceTickerComponent;
  let fixture: ComponentFixture<PriceTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
