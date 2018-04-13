import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomanagerComponent } from './portfoliomanager.component';

describe('PortfoliomanagerComponent', () => {
  let component: PortfoliomanagerComponent;
  let fixture: ComponentFixture<PortfoliomanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliomanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliomanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
