import { TestBed, inject } from '@angular/core/testing';

import { AddTraderAdminService } from './add-trader-admin.service';

describe('AddTraderAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTraderAdminService]
    });
  });

  it('should be created', inject([AddTraderAdminService], (service: AddTraderAdminService) => {
    expect(service).toBeTruthy();
  }));
});
