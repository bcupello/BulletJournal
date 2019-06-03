import { SendIrrelevantDailyLog } from './send-irrelevant-daily-log';
import { DailyLog } from './daily-log';

describe('SendIrrelevantDailyLog', () => {
  it('should create an instance', () => {
    expect(new SendIrrelevantDailyLog(new DailyLog(),true)).toBeTruthy();
  });
});
