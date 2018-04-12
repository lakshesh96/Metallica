import { TestBed, inject } from '@angular/core/testing';

import { PendingListService } from './pending-list.service';

describe('PendingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingListService]
    });
  });

  it('should be created', inject([PendingListService], (service: PendingListService) => {
    expect(service).toBeTruthy();
  }));
});
