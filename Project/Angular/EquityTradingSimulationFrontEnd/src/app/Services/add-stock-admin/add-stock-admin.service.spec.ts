import { TestBed, inject } from '@angular/core/testing';

import { AddStockAdminService } from './add-stock-admin.service';

describe('AddStockAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddStockAdminService]
    });
  });

  it('should be created', inject([AddStockAdminService], (service: AddStockAdminService) => {
    expect(service).toBeTruthy();
  }));
});
