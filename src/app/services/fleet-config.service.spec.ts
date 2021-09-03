import { TestBed } from '@angular/core/testing';

import { FleetConfigService } from './fleet-config.service';

describe('FleetConfigService', () => {
  let service: FleetConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
