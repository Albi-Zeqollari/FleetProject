import { TestBed } from '@angular/core/testing';

import { ComapnyConfigService } from './comapny-config.service';

describe('ComapnyConfigService', () => {
  let service: ComapnyConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComapnyConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
