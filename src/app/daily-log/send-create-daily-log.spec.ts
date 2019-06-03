import { SendCreateDailyLog } from './send-create-daily-log';
import { DailyLog } from './daily-log';

describe('SendCreateDailyLog', () => {
  it('should create an instance', () => {
    expect(new SendCreateDailyLog(new DailyLog())).toBeTruthy();
  });
});
