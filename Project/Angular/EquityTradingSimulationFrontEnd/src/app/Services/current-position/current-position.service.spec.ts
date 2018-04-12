import { TestBed, inject } from '@angular/core/testing';

import { CurrentPositionService } from './current-position.service';

describe('CurrentPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentPositionService]
    });
  });

  it('should be created', inject([CurrentPositionService], (service: CurrentPositionService) => {
    expect(service).toBeTruthy();
  }));
});
