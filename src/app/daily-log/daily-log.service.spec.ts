import { TestBed } from '@angular/core/testing';

import { DailyLogService } from './daily-log.service';

describe('DailyLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyLogService = TestBed.get(DailyLogService);
    expect(service).toBeTruthy();
  });
});
