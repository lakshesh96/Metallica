import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockExComponent } from './block-ex.component';

describe('BlockExComponent', () => {
  let component: BlockExComponent;
  let fixture: ComponentFixture<BlockExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
