import { SendEditDailyLog } from './send-edit-daily-log';
import { DailyLog } from './daily-log';

describe('SendEditDailyLog', () => {
  it('should create an instance', () => {
    expect(new SendEditDailyLog(new DailyLog())).toBeTruthy();
  });
});
