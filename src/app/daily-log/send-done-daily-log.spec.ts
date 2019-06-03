import { SendDoneDailyLog } from './send-done-daily-log';
import { DailyLog } from './daily-log';

describe('DoneDailyLog', () => {
  it('should create an instance', () => {
    expect(new SendDoneDailyLog(new DailyLog(),true)).toBeTruthy();
  });
});
