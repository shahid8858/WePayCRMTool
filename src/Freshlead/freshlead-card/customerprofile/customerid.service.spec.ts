import { TestBed } from '@angular/core/testing';

import { CustomeridService } from './customerid.service';

describe('CustomeridService', () => {
  let service: CustomeridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
