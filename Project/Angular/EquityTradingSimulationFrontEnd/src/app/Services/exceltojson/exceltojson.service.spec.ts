import { TestBed, inject } from '@angular/core/testing';

import { ExceltojsonService } from './exceltojson.service';

describe('ExceltojsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExceltojsonService]
    });
  });

  it('should be created', inject([ExceltojsonService], (service: ExceltojsonService) => {
    expect(service).toBeTruthy();
  }));
});
