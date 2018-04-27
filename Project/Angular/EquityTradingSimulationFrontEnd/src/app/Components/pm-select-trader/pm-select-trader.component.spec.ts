import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmSelectTraderComponent } from './pm-select-trader.component';

describe('PmSelectTraderComponent', () => {
  let component: PmSelectTraderComponent;
  let fixture: ComponentFixture<PmSelectTraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmSelectTraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmSelectTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
