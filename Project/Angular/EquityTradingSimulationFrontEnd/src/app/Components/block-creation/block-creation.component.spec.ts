import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCreationComponent } from './block-creation.component';

describe('BlockCreationComponent', () => {
  let component: BlockCreationComponent;
  let fixture: ComponentFixture<BlockCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
