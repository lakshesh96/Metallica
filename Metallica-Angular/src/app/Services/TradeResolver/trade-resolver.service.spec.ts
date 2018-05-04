import { TestBed, inject } from '@angular/core/testing';

import { TradeResolverService } from './trade-resolver.service';

describe('TradeResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeResolverService]
    });
  });

  it('should be created', inject([TradeResolverService], (service: TradeResolverService) => {
    expect(service).toBeTruthy();
  }));
});
