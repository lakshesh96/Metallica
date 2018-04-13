import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstocksComponent } from './addstocks.component';

describe('AddstocksComponent', () => {
  let component: AddstocksComponent;
  let fixture: ComponentFixture<AddstocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
