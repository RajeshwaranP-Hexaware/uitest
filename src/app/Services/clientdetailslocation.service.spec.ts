import { TestBed, inject } from '@angular/core/testing';

import { ClientdetailslocationService } from './clientdetailslocation.service';

describe('ClientdetailslocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientdetailslocationService]
    });
  });

  it('should be created', inject([ClientdetailslocationService], (service: ClientdetailslocationService) => {
    expect(service).toBeTruthy();
  }));
});
