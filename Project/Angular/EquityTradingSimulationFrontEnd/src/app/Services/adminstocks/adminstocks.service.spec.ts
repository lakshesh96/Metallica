import { TestBed, inject } from '@angular/core/testing';

import { AdminstocksService } from './adminstocks.service';

describe('AdminstocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminstocksService]
    });
  });

  it('should be created', inject([AdminstocksService], (service: AdminstocksService) => {
    expect(service).toBeTruthy();
  }));
});
