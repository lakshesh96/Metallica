import { TestBed, inject } from '@angular/core/testing';

import { TradeTableService } from './trade-table.service';

describe('TradeTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeTableService]
    });
  });

  it('should be created', inject([TradeTableService], (service: TradeTableService) => {
    expect(service).toBeTruthy();
  }));
});
