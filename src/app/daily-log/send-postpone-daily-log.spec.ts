import { SendPostponeDailyLog } from './send-postpone-daily-log';
import { DailyLog } from './daily-log';

describe('SendPostponeDailyLog', () => {
  it('should create an instance', () => {
    expect(new SendPostponeDailyLog(new DailyLog())).toBeTruthy();
  });
});
