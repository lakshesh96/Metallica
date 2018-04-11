import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyrequestComponent } from './buyrequest.component';

describe('BuyrequestComponent', () => {
  let component: BuyrequestComponent;
  let fixture: ComponentFixture<BuyrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
