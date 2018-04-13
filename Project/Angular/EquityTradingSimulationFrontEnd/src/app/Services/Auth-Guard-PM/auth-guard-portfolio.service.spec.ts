import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardPortfolioService } from './auth-guard-portfolio.service';

describe('AuthGuardPortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardPortfolioService]
    });
  });

  it('should be created', inject([AuthGuardPortfolioService], (service: AuthGuardPortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
