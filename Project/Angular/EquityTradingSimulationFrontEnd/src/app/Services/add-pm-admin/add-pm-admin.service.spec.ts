import { TestBed, inject } from '@angular/core/testing';

import { AddPmAdminService } from './add-pm-admin.service';

describe('AddPmAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPmAdminService]
    });
  });

  it('should be created', inject([AddPmAdminService], (service: AddPmAdminService) => {
    expect(service).toBeTruthy();
  }));
});
