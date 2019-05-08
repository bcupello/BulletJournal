import { TestBed } from '@angular/core/testing';

import { MonthlyLogService } from './monthly-log.service';

describe('MonthlyLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonthlyLogService = TestBed.get(MonthlyLogService);
    expect(service).toBeTruthy();
  });
});
