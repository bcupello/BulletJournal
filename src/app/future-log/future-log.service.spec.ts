import { TestBed } from '@angular/core/testing';

import { FutureLogService } from './future-log.service';

describe('FutureLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FutureLogService = TestBed.get(FutureLogService);
    expect(service).toBeTruthy();
  });
});
