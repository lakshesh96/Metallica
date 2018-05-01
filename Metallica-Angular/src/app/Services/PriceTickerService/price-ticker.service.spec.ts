import { TestBed, inject } from '@angular/core/testing';

import { PriceTickerService } from './price-ticker.service';

describe('PriceTickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceTickerService]
    });
  });

  it('should be created', inject([PriceTickerService], (service: PriceTickerService) => {
    expect(service).toBeTruthy();
  }));
});
