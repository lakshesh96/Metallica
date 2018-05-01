import { TestBed, inject } from '@angular/core/testing';

import { TradeOperationServiceService } from './trade-operation-service.service';

describe('TradeOperationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeOperationServiceService]
    });
  });

  it('should be created', inject([TradeOperationServiceService], (service: TradeOperationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
