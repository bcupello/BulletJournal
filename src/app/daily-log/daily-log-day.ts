import { DailyLog } from './daily-log';

export class DailyLogDay {
	Date: string;
	DailyLogs: DailyLog[];

	constructor(options?: {date: string; dailyLogs: DailyLog[]}){
    if (options) {
      console.log('weeee');
      this.Date = options.date;
      this.DailyLogs = options.dailyLogs;
    }
    else{
      this.Date = "";
      this.DailyLogs = [];
    }
  }
}
