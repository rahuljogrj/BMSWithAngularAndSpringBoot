import { TestBed } from '@angular/core/testing';

import { BmsService } from './bms.service';

describe('BmsService', () => {
  let service: BmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
