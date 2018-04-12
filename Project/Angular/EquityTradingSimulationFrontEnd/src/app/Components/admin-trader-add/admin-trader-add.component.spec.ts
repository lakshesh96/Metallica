import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraderAddComponent } from './admin-trader-add.component';

describe('AdminTraderAddComponent', () => {
  let component: AdminTraderAddComponent;
  let fixture: ComponentFixture<AdminTraderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTraderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTraderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
