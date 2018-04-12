import { TestBed, inject } from '@angular/core/testing';

import { BlockserviceService } from './blockservice.service';

describe('BlockserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockserviceService]
    });
  });

  it('should be created', inject([BlockserviceService], (service: BlockserviceService) => {
    expect(service).toBeTruthy();
  }));
});
