import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockManageComponent } from './admin-stock-manage.component';

describe('AdminStockManageComponent', () => {
  let component: AdminStockManageComponent;
  let fixture: ComponentFixture<AdminStockManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStockManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStockManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
