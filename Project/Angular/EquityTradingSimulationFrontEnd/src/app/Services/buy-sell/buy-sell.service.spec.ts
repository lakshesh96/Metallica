import { TestBed, inject } from '@angular/core/testing';

import { BuySellService } from './buy-sell.service';

describe('BuySellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuySellService]
    });
  });

  it('should be created', inject([BuySellService], (service: BuySellService) => {
    expect(service).toBeTruthy();
  }));
});
