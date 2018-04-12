import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortfoliomanagerAddComponent } from './admin-portfoliomanager-add.component';

describe('AdminPortfoliomanagerAddComponent', () => {
  let component: AdminPortfoliomanagerAddComponent;
  let fixture: ComponentFixture<AdminPortfoliomanagerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPortfoliomanagerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortfoliomanagerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
